import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";

export default function Banner() {
  return (
    <div
      id="banner"
      className="banner-container mt-5"
      style={{ marginBottom: -35 }}
    >
      <Container className="p-3 pb-5">
        <div className="banner-left">
          <Row style={{ justifyContent: "space-between" }}>
            <Col lg={6} md={12}>
              <Row>
                <Card style={{ paddingTop: "2rem" }}>
                  <Card.Title>
                    Get a 'Stake in Pool' NFT & Own A Part of a Cross-Chain
                    Staking Pool
                  </Card.Title>
                  <ul className="textAlignLeft">
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      <b>Receive</b> 4 "Ethereum Killers" monthly
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      <b>Earn</b> interest in SOL, AVAX, FTM, MATIC & USDC
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      <b>Automatic</b> Compounding
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      <b>Current</b> APY: 42.03%
                    </li>
                  </ul>
                </Card>
              </Row>
              <Row>
                <Col lg={6} md={6}>
                  <a href="/whitepaper">
                    <Button variant="secondary" size="lg" active>
                      WHITEPAPER
                    </Button>
                  </a>
                </Col>
                <Col lg={6} md={6}>
                  <a href="/app">
                    <Button variant="secondary" size="lg" active>
                      BUY NOW
                    </Button>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col lg={5} className="p-4">
              <Image src="/images/slide-gif.gif" roundedCircle />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
