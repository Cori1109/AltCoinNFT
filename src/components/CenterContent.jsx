import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";

export default function CenterContent() {
  return (
    <div id="banner" className="banner-container mb-5 mt-5">
      <Container className="p-3">
        <div className="banner-left">
          <Row style={{ justifyContent: "space-between" }}>
            <Col lg={5} md={12}>
              <Row>
                <Card>
                  <ul className="textAlignLeft" style={{ paddingTop: "2rem" }}>
                    <h5>Why Staking With Us Is Better:</h5>
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
            <Col
              lg={7}
              className="p-4"
              style={{
                display: "flex",
                alignItems: "center",
                boxSizing: "border-box",
                justifyContent: "space-between",
              }}
            >
              <div className="centerBox">
                <Image
                  src="coin_img/avax.png"
                  style={{ width: 64 }}
                  roundedCircle
                />
              </div>
              <div className="centerBox">
                <Image
                  src="coin_img/sol.png"
                  style={{ width: 64 }}
                  roundedCircle
                />
              </div>
              <div className="centerBox">
                <Image
                  src="coin_img/ftm.png"
                  style={{ width: 64 }}
                  roundedCircle
                />
              </div>
              <div className="centerBox">
                <Image
                  src="coin_img/matic.png"
                  style={{ width: 64 }}
                  roundedCircle
                />
              </div>
              <div className="centerBox">
                <Image
                  src="coin_img/usdc.png"
                  style={{ width: 64 }}
                  roundedCircle
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
