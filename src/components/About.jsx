import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

export default function About() {
  return (
    <div id="about" className="about-container mb-5">
      <Container>
        <div className="about-left">
          <Row>
            {/* <CounterInput max={10} min={5} onChange={ (value) => { console.log(value) } } value={5} /> */}
            <Col lg={5} md={12}>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6} className="mb-3 customPadding">
                  <Image src="images/1.jpg" className="w-100 " rounded />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="mb-3 customPadding">
                  <Image src="images/2.jpg" className="w-100" rounded />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="mb-3 customPadding">
                  <Image src="images/3.jpg" className="w-100" rounded />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="mb-3 customPadding">
                  <Image src="images/4.jpg" className="w-100" rounded />
                </Col>
              </Row>
            </Col>
            <Col lg={7} className="p-4">
              <div className="text-white">
                <p className="mb-0 font-xxl aboutHeading">ABOUT</p>
                {/* <span class="label-line"></span> */}
                <p
                  className="mb-0 font-xxl aboutWelcome "
                  style={{ fontWeight: "bold" }}
                >
                  Welcome to the
                </p>
                <p
                  className="mb-0 text-orange font-xxl"
                  style={{ fontWeight: "bold" }}
                >
                  Steak In Pool
                </p>
                <p className="mt-4 mb-0 font-lgr aboutTxt">
                  The <b className="text-orange">first SIP NFT</b> collection
                  will be the Layer 1 Society. There will be a total amount of
                  10000 <b>unique NFTs</b>.
                </p>
                <p className="mb-0 font-lgr aboutTxt">
                  Some just want to watch sports and hang with the fellas.
                  Others are ready to party and meet women. And a few are in
                  search of <b>deeper connections and true happiness</b>.
                </p>
                <p className="aboutTxt">
                  The <b className="text-orange">SIP NFT</b> is a community of
                  humans who realize it's never 'just a drink.' We are lovers of
                  art, looking to network, and making millions investing in{" "}
                  <b>CRYPTO</b>.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
