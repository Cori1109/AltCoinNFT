import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";

export default function BottomContent() {
  return (
    <div id="banner" className="banner-container mb-5 mt-5">
      <Container className="p-3">
        <div className="banner-left">
          <Row style={{justifyContent: "space-between"}}>
            <Col lg={5} className="p-4" style={{display: "flex", alignItems: "center"}}>
              <div className="text-white">
                <Image src="cross_chain_yield_optimizer.png" className="w-100" />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <Row>
                <Card>
                  <p></p>
                  <p>HOW IT WORKS</p>
                  <p></p>
                  <ul className="textAlignLeft">
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      100% of NFT sales revenue goes to staking pool
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Smart Contracts determine best coin & pool to stake
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      90% of staking rewards are paid to NFT holders monthly
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      10% of staking rewards go to marketing & the team
                    </li>
                  </ul>
                  <p className="textAlignLeft">As sales come in on different days, the protocols you have exposure to increases. This further diversifies the fund and lowers risk.</p>
                  <p className="textAlignLeft">Every secondary NFT sale incurs a 10% royalty, which is added to the staking pool. This means your rewards compound with every 3rd party NFT sale in the future.</p>
                  <p className="textAlignLeft">Current APY: 42.03%</p>
                </Card>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
