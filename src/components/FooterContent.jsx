import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";

export default function FooterContent() {
  return (
    <div id="banner" className="banner-container mb-5 mt-5">
      <Container className="p-3">
        <div className="banner-left">
          <Row style={{justifyContent: "space-between"}}>
            <Col lg={5} className="p-4" style={{display: "flex", alignItems: "center"}}>
            <Row>
                <Card>
                  <input type="email" />
                </Card>
              </Row>
            </Col>
            <Col lg={6} md={12}>
              <Row>
                <Card>
                  <p></p>
                  <p>Be the first to know!</p>
                  <p>Get alerts for:</p>
                  <ul className="textAlignLeft">
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      NFT Pre-Sales
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Altcoin Price Alerts
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Undervalued Altcoin Of The Day
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Altcoin 'Need to Know' News
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Rewards Payment Notices
                    </li>
                  </ul>
                </Card>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
