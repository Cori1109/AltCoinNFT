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
                  <Button variant="secondary" size="lg" active>
                    WHITEPAPER
                  </Button>
                </Col>
                <Col lg={6} md={6}>
                  <Button variant="secondary" size="lg" active>
                    JOIN NOW
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={5} className="p-4">
              <div className="text-white">
                <Image src="3D.jpg" className="w-100" roundedCircle />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
