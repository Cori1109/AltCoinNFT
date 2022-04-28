import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";
import Web3 from "web3";
import MaticTokenABI from "../abi/MaticTokenABI.json";
import { Constants } from "../config/constants";
import { Alert } from "react-bootstrap";

export default function ConnectButton() {
  const { activateBrowserWallet, account, chainId, deactivate } = useEthers();
  const web3 = new Web3(Web3.givenProvider || Constants.rpcURL[80001]);
  const [balance, setBalance] = useState(0);

  useEffect(async () => {
    await getBalance();
  });

  async function getBalance() {
    const tokenInst = new web3.eth.Contract(
      MaticTokenABI,
      Constants.token.Polygon
    );
    const _balMatic = account
      ? await tokenInst.methods.balanceOf(account).call()
      : 0;
    console.log("balance:", account, _balMatic);
    setBalance(_balMatic);
  }

  async function handleConnectWallet() {
    activateBrowserWallet();
  }

  function handleDeactivateAccount() {
    deactivate();
  }

  return account ? (
    <>
      {chainId && chainId != process.env.REACT_APP_CHAIN_ID ? (
        alert("Please switch the Polygon Network!")
      ) : (
        <div className="connectedWallet">
          <div className="balText">
            {parseFloat(formatEther(balance)).toFixed(3)} MATIC
          </div>
          <button className="connectbtn" onClick={handleDeactivateAccount}>
            <div className="accountAdd">
              {account &&
                `${account.slice(0, 6)}...${account.slice(
                  account.length - 4,
                  account.length
                )}`}
            </div>
            <Identicon />
          </button>
        </div>
      )}
    </>
  ) : (
    <button className="disConnectWallet" onClick={handleConnectWallet}>
      Connect to a wallet
    </button>
  );
}
