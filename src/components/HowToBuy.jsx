import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";

export default function HowToBuy() {
  return (
    <div id="banner" className="banner-container mb-5 mt-5">
      <Container className="p-3">
        <div className="banner-left">
          <Row style={{justifyContent: "space-between"}}>
            <Col lg={5} className="p-4" style={{display: "flex", alignItems: "center"}}>
              <div className="text-white">
              <Image src="3D.jpg" className="w-100"  />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <Row>
                <Card>
                  <p></p>
                  <p>HOW TO BUY</p>
                  <p></p>
                  <ul className="textAlignLeft">
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Step 1 :
                    </li>
                    <li>
                      {" "}
                      <img src="images/checkmark.png" width="20px" />
                      Step 2 :
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
