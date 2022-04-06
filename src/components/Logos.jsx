import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

export default function Logos() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card id="logos" className="p-3">
        <Row style={{ justifyContent: "center" }}>
          <Col
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="cointelegraph.png"
              alt="Coin Telegraph"
              width={100}
            ></Image>
          </Col>
          <Col
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src="forbes.png" alt="Forbes" width={100}></Image>
          </Col>
          <Col
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src="yahoo.png" alt="Yahoo" width={100}></Image>
          </Col>
          <Col
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src="cnn.png" alt="CNN" width={100}></Image>
          </Col>
          <Col
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src="miaminft.png" alt="NFTMiami" width={100}></Image>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
