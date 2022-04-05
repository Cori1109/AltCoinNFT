import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3 from "web3";

import SteakInPool from "../contract/SteakInPool.json";
import Wallet from "./wallet";

export default function Login(props) {
  const contractAddress = process.env.REACT_APP_NFT_ADDRESS;
  const [balMatic, setBalMatic] = useState("0");

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.getBalance(props.address).then((balance) => {
      // convert a currency unit from wei to ether
      const _balMatic = ethers.utils.formatEther(balance);
      const _balance = parseFloat(parseInt(_balMatic * 100) / 100);
      setBalMatic(_balance.toString());
      console.log(`balance: ${_balMatic} MATIC`);
    });
  });

  const DoConnect = async () => {
    console.log("Connecting....");
    try {
      // Get network provider and web3 instance.
      const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      // Get an instance of the contract sop we can call our contract functions
      const instance = new web3.eth.Contract(SteakInPool, contractAddress);
      props.callback({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error("Could not connect to wallet.", error);
    }
  };

  // If not connected, display the connect button.
  if (!props.connected)
    return (
      <button className="login" onClick={DoConnect}>
        Connect Wallet
      </button>
    );

  // Display the wallet address. Truncate it to save space.
  return <Wallet address={props.address} />;
}
