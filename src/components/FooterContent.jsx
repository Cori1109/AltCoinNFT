import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Image,
  Card,
  Form,
} from "react-bootstrap";

export default function FooterContent() {
  return (
    <div id="banner" className="banner-container mb-5 mt-5">
      <Container className="p-3">
        <Row style={{ justifyContent: "space-between" }}>
          <Col
            lg={5}
            className="p-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Row>
              <Card>
                <div>
                  <Form>
                    <Row>
                      <Image src="3D-Logo.png"></Image>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                        />
                      </Col>
                      <Col>
                        <Button variant="primary" type="submit">
                          Subscribe
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Card>
            </Row>
          </Col>
          <Col lg={5} className="p-4 footerContent">
            <Row>
              <Card style={{ paddingTop: "2rem" }}>
                <h5>Be the first to know!</h5>
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
      </Container>
    </div>
  );
}
