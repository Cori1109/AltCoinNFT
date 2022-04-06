import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";

export default function TopContent() {
  return (
    <div id="banner" className="banner-container mb-5" style={{marginTop: -35}}>
      <Container className="p-3 pt-5">
        <div className="banner-left">
          <Row style={{justifyContent: "center", display: "flex"}}>
            <Col lg={10} md={12}>
              <Row>
                <Card>
                  <p></p>
                  <p>
                    <a href="https://altcoinstaking.io" color="black">AltcoinStaking.IO</a> brings you fully decentralized solutions for earning income across the best altcoins.
                  </p>
                  <p>Some of the reasons HODL'rs love us include:</p>
                  <ul className="textAlignLeft">
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Safe passive income
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Fully sustainable from day 1
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Built in compound reward systems
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Ever increasing underlying treasury value
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Trustless system (team cannot access staking pools)
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Fast & easy diversification across top altcoins
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
