import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";

export default function CenterContent() {
  return (
    <div id="banner" className="banner-container mb-5 mt-5">
      <Container className="p-3">
        <div className="banner-left">
          <Row style={{justifyContent: "space-between"}}>
            <Col lg={5} className="p-4" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <div className="text-white">
                <Image src="coin_img/avax.png" style={{width: 64}} roundedCircle />
              </div>
              <div className="text-white">
                <Image src="coin_img/sol.png" style={{width: 64}} roundedCircle />
              </div>
              <div className="text-white">
                <Image src="coin_img/ftm.png" style={{width: 64}} roundedCircle />
              </div>
              <div className="text-white">
                <Image src="coin_img/matic.png" style={{width: 64}} roundedCircle />
              </div>
              <div className="text-white">
                <Image src="coin_img/usdc.png" style={{width: 64}} roundedCircle />
              </div>
            </Col>
            <Col lg={5} md={12}>
              <Row>
                <Card>
                  <ul className="textAlignLeft">
                    <p>Why Staking With Us Is Better:</p>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Lowers your risk
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Increases your yield
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Effortless diversification
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Automatic compounding
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Done For You
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
