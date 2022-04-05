// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// @title:      Steak In Pool
// @twitter:    https://twitter.com/SteakInPool
// @url:        https://www.steakinpool.com/

/*
 *  ▄▀▀▀ ▀▀█▀▀ █▀▀▀ ▄▀▀▄ █  ▄▀   ▀█▀ █▄  █   █▀▀▄ ▄▀▀▄ ▄▀▀▄  █   
 *  ▀▄▄    █   █▄▄▄ █▄▄█ █▄▀      █  █ █ █   █▄▄▀ █  █ █  █  █
 *     █   █   █    █  █ █ ▀▄     █  █ ▀▄█   █    █  █ █  █  █    
 *  ▀▀▀    ▀   ▀▀▀▀ ▀  ▀ ▀   ▀   ▀▀▀ ▀   ▀   ▀     ▀▀   ▀▀   ▀▀▀▀
 */

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// deploy on the Polygon Network
contract SteakInPool is ERC721Enumerable, Ownable, ReentrancyGuard {
    using SafeMath for uint256;

    // constants
    uint256 private MAX_ELEMENTS = 10000;
    uint256 public maxItemsPerWallet = 10;
    uint256[] private LEVEL_MAX = [0, 3800, 6300, 8200, 9200, 10000];
    // uint256[] public LEVEL_PRICE = [1000 ether, 2000 ether, 8000 ether, 16000 ether, 32000 ether]; // 1 ether means 1 MATIC
    uint256[] private LEVEL_PRICE = [0.01 ether, 0.02 ether, 0.08 ether, 0.16 ether, 0.32 ether];
    uint256[] private _tokenIdTracker = [0, 3800, 6300, 8200, 9200];

    // state variable
    bool public MINTING_PAUSED = true;
    string public baseTokenURI;
    
    mapping(uint256 => address) private claimedList;

    constructor() ERC721("Steak In Pool", "SIP"){
    }

    // ===== Modifier =====
    function _onlySender() private view {
        require(msg.sender == tx.origin);
    }

    modifier onlySender {
        _onlySender();
        _;
    }

    // ===== Mint =====
    function mint(uint256[] memory numberOfTokens) external payable onlySender nonReentrant {
        require(!MINTING_PAUSED, "Minting is not active");
        require(totalSupply() < MAX_ELEMENTS, "All tokens have been minted");

        uint256 numOt = 0;
        uint256 price = 0;
        for (uint256 i = 0; i < 5; i++) {
            require(_tokenIdTracker[i] < LEVEL_MAX[i + 1], "Please fix the mint amount per level");
            numOt += numberOfTokens[i];
            price += numberOfTokens[i] * LEVEL_PRICE[i];
        }

        require(totalSupply() + numOt < MAX_ELEMENTS, "Purchase would exceed max supply");
        require(balanceOf(msg.sender) + numOt <= maxItemsPerWallet, "Purchase exceeds max allowed");
        require(price <= msg.value, "Payment amount is not sufficient");

        for (uint256 i = 0; i < 5; i++) {
            for (uint256 j = 0; j < numberOfTokens[i]; j++) {
                _tokenIdTracker[i]++;
                claimedList[_tokenIdTracker[i]] = msg.sender; // should be checked
                _safeMint(msg.sender, _tokenIdTracker[i]);
            }
        }
    }

    // ===== Setter (owner only) =====

    function setMintPaused(bool _MintPaused) external onlyOwner{
        MINTING_PAUSED = _MintPaused;
    }

    function setMaxItemsPerWallet(uint256 _maxItemsPerWallet) external onlyOwner{
        maxItemsPerWallet = _maxItemsPerWallet;
    }

    function setMintPrice(uint256[] memory _mintPrice) external onlyOwner {
        for (uint256 i =0; i < 5; i++) {
            LEVEL_PRICE[i] = _mintPrice[i];
        }
    }

    function setBaseTokenURI(string calldata _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    // ===== Withdraw to owner =====
    function withdrawAll() external onlyOwner onlySender nonReentrant {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Failed to send ether");
    }

    // ===== View =====
    function mintedCnt() public view returns (uint256[] memory) {
        uint256[] memory _mintedcnt = new uint256[] (5);
        for (uint256 i = 0; i < 5; i++) {
            _mintedcnt[i] = _tokenIdTracker[i] - LEVEL_MAX[i];
        }
        return _mintedcnt;
    }

    function mintPrice() public view returns (uint256[] memory) {
        uint256[] memory _price = new uint256[] (5);
        for (uint256 i = 0; i < 5; i++) {
            _price[i] = LEVEL_PRICE[i];
        }
        return _price;
    }

    function walletOfOwner(address address_) public virtual view returns (uint256[] memory) {
        uint256 _balance = balanceOf(address_);
        uint256[] memory _tokens = new uint256[] (_balance);
        uint256 _index;
        for (uint256 j = 0; j < 5; j++) {
            for (uint256 i = LEVEL_MAX[j] + 1; i <= _tokenIdTracker[j]; i++) {
                if (claimedList[i] == address_) { _tokens[_index] = i; _index++; }
            }
        }
        return _tokens;
    }
}
