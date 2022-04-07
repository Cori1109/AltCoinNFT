import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";

export default function BottomContent() {
  return (
    <div id="banner" className="banner-container mb-5 mt-5">
      <Container className="p-3">
        <div
          className="bottomContent"
          style={{ backgroundImage: "url(images/footer-bg.png)" }}
        >
          <Row>
            <Row style={{ justifyContent: "center" }}>
              <Card className="bottomCard">
                <h4>HOW IT WORKS</h4>
                <p></p>
                <ul className="textAlignLeft" style={{ paddingLeft: 0 }}>
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
                <p className="textAlignLeft">
                  As sales come in on different days, the protocols you have
                  exposure to increases. This further diversifies the fund and
                  lowers risk.
                </p>
                <p className="textAlignLeft">
                  Every secondary NFT sale incurs a 10% royalty, which is added
                  to the staking pool. This means your rewards compound with
                  every 3rd party NFT sale in the future.
                </p>
                <p className="textAlignLeft">Current APY: 42.03%</p>
              </Card>
            </Row>
          </Row>
        </div>
      </Container>
    </div>
  );
}
