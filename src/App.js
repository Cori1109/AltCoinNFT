import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Image, Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/Home";
import Mint from "./pages/Mint";
import Blog from "./pages/Blog";
import Whitepaper from "./pages/Whitepaper";
// import Gallery from "./pages/Gallery";
// import MyTokens from "./pages/MyTokens";

function App() {
  return (
    <div className="App">
      <Router>
        <div
          className="content"
          style={{ backgroundImage: "url(3D.png)", backgroundColor: "#20313c" }}
        >
          <Switch>
            <Route path="/app">
              <Mint />
            </Route>
            <Route path="/whitepaper">
              <Whitepaper />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
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
            <ul style={{ margin: "unset" }}>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCF6X5vqYNDyP5bIOa43d1dw"
                  target={"_blank"}
                >
                  <Image
                    className="socialBtn yutube"
                    src="yutube.png"
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/altcoin_staking" target={"_blank"}>
                  <Image
                    className="socialBtn twitter"
                    src="twitter.png"
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/c5hHCEX2NB" target={"_blank"}>
                  <Image
                    className="socialBtn discord"
                    src="discord.png"
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/altcoinstaking"
                  target={"_blank"}
                >
                  <Image
                    className="socialBtn facebook"
                    src="facebook.png"
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a href="/whitepaper" target={"_blank"}>
                  <Image
                    className="socialBtn whitepaper"
                    src="whitepaper.png"
                    height={40}
                  />
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </Router>
    </div>
  );
}

export default App;
