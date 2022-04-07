import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Image, Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/Home";
import Mint from "./pages/Mint";
// import Gallery from "./pages/Gallery";
// import MyTokens from "./pages/MyTokens";

// import Login from "./components/Login";

function App() {
  // const [web3props, setWeb3Props] = useState({
  //   web3: null,
  //   accounts: null,
  //   contract: null,
  // });

  // // Callback function for the Login component to give us access to the web3 instance and contract functions
  // const OnLogin = function (param) {
  //   let { web3, accounts, contract } = param;
  //   if (web3 && accounts && accounts.length && contract) {
  //     setWeb3Props({ web3, accounts, contract });
  //   }
  // };

  // // If the wallet is connected, all three values will be set. Use to display the main nav below.
  // const contractAvailable = !(
  //   !web3props.web3 &&
  //   !web3props.accounts &&
  //   !web3props.contract
  // );
  // // Grab the connected wallet address, if available, to pass into the Login component
  // const walletAddress = web3props.accounts ? web3props.accounts[0] : "";

  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark" id="header">
          <Container>
            <Navbar.Brand href="/">
              <img src="logo.png" id="logo" />
            </Navbar.Brand>
            <Nav>
              <Nav.Link id="headerLink" href="/">
                HOME
              </Nav.Link>
              <Nav.Link id="headerLink" href="#features">
                FEATURES
              </Nav.Link>
              <Nav.Link id="headerLink" href="#roadmap">
                ROADMAP
              </Nav.Link>
              <Nav.Link id="headerLink" href="#faq">
                FAQ
              </Nav.Link>
              <Nav.Link href="/blog">BLOG</Nav.Link>
              <Nav.Link href="/app">APP</Nav.Link>
              {/* <Login
                  callback={OnLogin}
                  connected={contractAvailable}
                  address={walletAddress}
                ></Login> */}
            </Nav>
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
          </Container>
        </Navbar>
        <div className="content" style={{ backgroundImage: "url(3D.png)" }}>
          <Switch>
            <Route path="/app">{/* <Mint /> */}</Route>
            <Route path="/blog">{/* <Blog /> */}</Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <footer>
          <ul
            style={{
              display: "flex",
              margin: "unset",
              alignItems: "center",
              listStyleType: "none",
            }}
          >
            <li>
              <Link to="/#">
                <a style={{ fontSize: 14 }}>COPYRIGHT</a>
              </Link>
            </li>
            <span style={{ marginLeft: 10, marginRight: 10 }}>|</span>
            <li>
              <Link to="/#">
                <a style={{ fontSize: 14 }}>CONTACT US</a>
              </Link>
            </li>
            <span style={{ marginLeft: 10, marginRight: 10 }}>|</span>
            <li>
              <Link to="/#">
                <a style={{ fontSize: 14 }}>PRIVACY POLICY</a>
              </Link>
            </li>
            <span style={{ marginLeft: 10, marginRight: 10 }}>|</span>
            <li>
              <Link to="/#">
                <a style={{ fontSize: 14 }}>EARNINGS DISCLAIMER</a>
              </Link>
            </li>
          </ul>
          <nav>
            <ul>
              <li>
                <Link to="/yutube">
                  <Image
                    className="socialBtn yutube"
                    src="yutube.png"
                    height={40}
                  />
                </Link>
              </li>
              <li>
                <Link to="/twitter">
                  <Image
                    className="socialBtn twitter"
                    src="twitter.png"
                    height={40}
                  />
                </Link>
              </li>
              <li>
                <Link to="/discord">
                  <Image
                    className="socialBtn discord"
                    src="discord.png"
                    height={40}
                  />
                </Link>
              </li>
              <li>
                <Link to="/whitepaper">
                  <Image
                    className="socialBtn whitepaper"
                    src="whitepaper.png"
                    height={40}
                  />
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
