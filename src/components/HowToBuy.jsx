import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";

export default function HowToBuy() {
  return (
    <div id="banner" className="banner-container mb-5 mt-5">
      <Container className="p-3">
        <div className="banner-left">
          <Row style={{ justifyContent: "space-between" }}>
            <Col lg={5} className="p-4">
              <div>
                <Image
                  src="3D.jpg"
                  className="w-100"
                  style={{ borderRadius: "20%" }}
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <Row style={{ paddingTop: "2rem" }}>
                <h5>HOW TO BUY</h5>
                <p></p>
                <ul className="textAlignLeft">
                  <li style={{ display: "flex" }}>
                    {" "}
                    <img src="images/checkmark.png" height="20px" />
                    <h6 style={{ marginRight: "1rem" }}>Step 1 :</h6> Click the
                    Connect Wallet Button
                  </li>
                  <li style={{ display: "flex" }}>
                    {" "}
                    <img src="images/checkmark.png" height="20px" />
                    <h6 style={{ marginRight: "1rem" }}>Step 2 :</h6> Click the
                    App Button and you can mint the NFT
                  </li>
                </ul>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
