import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider } from "@usedapp/core";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Constants } from "./config/constants";

const chainId = process.env.REACT_APP_CHAIN_ID;

const config = {
  readOnlyChainId: chainId,
  readOnlyUrls: {
    [chainId]: Constants.rpcURL.chainId,
  },
};

ReactDOM.render(
  <DAppProvider config={config}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DAppProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
