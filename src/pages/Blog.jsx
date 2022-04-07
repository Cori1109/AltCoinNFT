import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

export default function Blog() {
  // Display the minting gallery
  return (
    <div className="page-mint">
      <Navbar id="header">
        <Container>
          <Navbar.Brand href="/">
            <img src="logo.png" id="logo" alt="logo" />
          </Navbar.Brand>
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
    </div>
  );
}
