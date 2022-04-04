// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract AltcoinNFT is ERC721Enumerable, Ownable, ReentrancyGuard {
    using SafeMath for uint256;

    // constants
    uint256 private MAX_ELEMENTS = 10000;
    uint256 public PURCHASE_LIMIT = 10;
    uint256[] public LEVEL_MAX = [3800, 6300, 8200, 9200, 10000];
    uint256[] public LEVEL_PRICE = [0.01 ether, 0.02 ether, 0.08 ether, 0.16 ether, 0.32 ether];
    uint256[] public _tokenIdTracker = [0, 3800, 6300, 8200, 9200];

    // state variable
    bool public MINTING_PAUSED = true;
    string public baseTokenURI;
    
    mapping(uint256 => address) private claimedList;
    mapping(address => uint256) public _allowListClaimed;

    constructor() ERC721("Steak In Pool", "SIP"){
    }

    function setPauseMinting(bool _pause) external onlyOwner{
        MINTING_PAUSED = _pause;
    }

    function setPurchaseLimit(uint256 _limit) external onlyOwner{
        PURCHASE_LIMIT = _limit;
    }

    function setPrice(uint256[] memory _price) external onlyOwner {
        for (uint256 i =0; i < 5; i++) {
            LEVEL_PRICE[i] = _price[i];
        }
    }

    function mint(uint256[] memory numberOfTokens) external payable nonReentrant {
        require(!MINTING_PAUSED, "Minting is not active");
        require(totalSupply() < MAX_ELEMENTS, "All tokens have been minted");

        uint256 numOt = 0;
        uint256 price = 0;
        for (uint256 i = 0; i < 5; i++) {
            require(_tokenIdTracker[i] < LEVEL_MAX[i], "Please fix the mint amount per level");
            numOt += numberOfTokens[i];
            price += numberOfTokens[i] * LEVEL_PRICE[i];
        }

        require(totalSupply() + numOt < MAX_ELEMENTS, "Purchase would exceed max supply");
        require(_allowListClaimed[msg.sender] + numOt <= PURCHASE_LIMIT, "Purchase exceeds max allowed");
        require(price <= msg.value, "Payment amount is not sufficient");

        for (uint256 i = 0; i < 5; i++) {
            for (uint256 j = 0; j < numberOfTokens[i]; j++) {
                _tokenIdTracker[i]++;
                claimedList[_tokenIdTracker[i]] = msg.sender; // should be checked
                _allowListClaimed[msg.sender] ++;
                _safeMint(msg.sender, _tokenIdTracker[i]);
            }
        }
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        payable(msg.sender).transfer(balance);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string calldata baseURI) public onlyOwner {
        baseTokenURI = baseURI;
    }
}
