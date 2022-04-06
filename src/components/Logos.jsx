import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

export default function Logos() {
  return (
    <div>
      <Card id="logos">
        <Row>
          <Col md={2}>Logos</Col>
          <Col md={2}>
            <Image
              src="cointelegraph.png"
              alt="Coin Telegraph"
              width={100}
            ></Image>
          </Col>
          <Col md={2}>
            <Image src="forbes2.png" alt="Forbes" width={100}></Image>
          </Col>
          <Col md={2}>
            <Image src="yahoo.png" alt="Yahoo" width={100}></Image>
          </Col>
          <Col md={2}>
            <Image src="" alt="CNN"></Image>
          </Col>
          <Col md={2}>
            <Image src="" alt="NFTMiami"></Image>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
