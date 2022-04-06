import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/Home";
import Mint from "./pages/Mint";
import Gallery from "./pages/Gallery";
import MyTokens from "./pages/MyTokens";

import Login from "./components/Login";

function App() {
  const [web3props, setWeb3Props] = useState({
    web3: null,
    accounts: null,
    contract: null,
  });

  // Callback function for the Login component to give us access to the web3 instance and contract functions
  const OnLogin = function (param) {
    let { web3, accounts, contract } = param;
    if (web3 && accounts && accounts.length && contract) {
      setWeb3Props({ web3, accounts, contract });
    }
  };

  // If the wallet is connected, all three values will be set. Use to display the main nav below.
  const contractAvailable = !(
    !web3props.web3 &&
    !web3props.accounts &&
    !web3props.contract
  );
  // Grab the connected wallet address, if available, to pass into the Login component
  const walletAddress = web3props.accounts ? web3props.accounts[0] : "";

  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/">
            <img src="logo-11.png" id="logo" className="greenzeta" />
          </Link>
          <nav style={{ marginTop: "12px" }}>
            <ul>
              {contractAvailable && (
                <>
                  <li>
                    <Link to="/app">
                      <button className="navBtn">App</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/marketplace">
                      <button className="navBtn">Marketplace</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <button className="navBtn">Blog</button>
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Login
                  callback={OnLogin}
                  connected={contractAvailable}
                  address={walletAddress}
                ></Login>
              </li>
            </ul>
            <Toaster
              position="top-right"
              toastOptions={{
                success: {
                  style: {
                    background: "white",
                    paddingLeft: 40,
                    paddingRight: 40,
                    fontWeight: 500,
                  },
                },
                error: {
                  style: {
                    background: "white",
                    color: "black",
                    paddingLeft: 40,
                    paddingRight: 40,
                    fontWeight: 500,
                  },
                },
              }}
            />
          </nav>
        </header>
        <div className="content">
          <Switch>
            {/* <Route path="/mytokens">
              <MyTokens
                contract={web3props.contract}
                address={walletAddress}
              ></MyTokens>
            </Route>
            <Route path="/gallery">
              <Gallery contract={web3props.contract}></Gallery>
            </Route> */}
            <Route path="/app">
              <Mint
                contract={web3props.contract}
                address={walletAddress}
              ></Mint>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <footer>
          <ul style={{display: "flex", margin: "unset", alignItems: "center", listStyleType: "none"}}>
            <li>
              <Link to="/#">
                <a style={{fontSize: 14}}>COPYRIGHT</a>
              </Link>
            </li>
            <span style={{marginLeft: 10, marginRight: 10}}>|</span>
            <li>
              <Link to="/#">
                <a style={{fontSize: 14}}>CONTACT US</a>
              </Link>
            </li>
            <span style={{marginLeft: 10, marginRight: 10}}>|</span>
            <li>
              <Link to="/#">
                <a style={{fontSize: 14}}>PRIVACY POLICY</a>
              </Link>
            </li>
            <span style={{marginLeft: 10, marginRight: 10}}>|</span>
            <li>
              <Link to="/#">
                <a style={{fontSize: 14}}>EARNINGS DISCLAIMER</a>
              </Link>
            </li>
          </ul>
          <nav style={{ marginTop: "12px" }}>
            <ul>
              <li>
                <Link to="/app">
                  <button className="navBtn">Youtube</button>
                </Link>
              </li>
              <li>
                <Link to="/marketplace">
                  <button className="navBtn">Twitter</button>
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <button className="navBtn">Discord</button>
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <button className="navBtn">WhitePaper</button>
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </Router>
    </div>
  );
}

export default App;
