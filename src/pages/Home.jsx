import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import Banner from "../components/Banner";
import Roadmap from "../components/Roadmap";
import BackTop from "../components/backtotop";
import Logos from "../components/Logos";
import TopContent from "../components/TopContent";
import CenterContent from "../components/CenterContent";
import BottomContent from "../components/BottomContent";
import Testimonials from "../components/Testimonials";
import HowToBuy from "../components/HowToBuy";
import FooterContent from "../components/FooterContent";

export default function Home() {
  return (
    <div className="page home">
      <Navbar id="header">
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
      <Banner />
      <Logos />
      <TopContent />
      <CenterContent />
      <BottomContent />
      <Testimonials />
      <HowToBuy />
      <Roadmap />
      <BackTop />
      <FooterContent />
    </div>
  );
}
