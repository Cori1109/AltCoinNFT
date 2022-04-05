import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
// import { FaArrowRight } from "react-icons/fa";

export default function Feature() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3500, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div id="futureplan" className="feature-class mb-5">
      <Container>
        <Row>
          <Col md={12} lg={6} className="mb-5 mt-5 p-4 featureLeft">
            <p className="font-xxl mb-0 white-color headingTxt mt-3">
              <b>FEATURES AND UTILITY</b>
            </p>
            <p className=" mb-1 default-color  font-bold mt-2 ">SIP NFT</p>

            <div className="featurePlantxt">
              <ul className="mb-5 pb-5 textAlignLeft">
                <li>
                  {" "}
                  <img src="images/checkmark.png" width="20px" />
                  <b>Holder</b> role in our Discord chat
                </li>
                <li>
                  {" "}
                  <img src="images/checkmark.png" width="20px" />
                  <b>Being</b> eligible for Airdrops (NFT or Coins)
                </li>
                <li>
                  {" "}
                  <img src="images/checkmark.png" width="20px" />
                  <b>Access</b> to our decentralized application
                </li>
                <li>
                  {" "}
                  <img src="images/checkmark.png" width="20px" />
                  <b>earning</b> SIP Tokens for staking the NFT
                </li>
                <li>
                  {" "}
                  <img src="images/checkmark.png" width="20px" />
                  <b>Eligibility</b> for Community Portfolio Rewards
                </li>
                <li>
                  {" "}
                  <img src="images/checkmark.png" width="20px" />
                  <b>Staking</b> the SIP Token
                </li>
                <li>
                  {" "}
                  <img src="images/checkmark.png" width="20px" />
                  <b>breeding</b> of our future Layer 2 collection
                </li>
                <li>
                  {" "}
                  <img src="images/checkmark.png" width="20px" />
                  <b>Metaverse</b> version of your Layer 1 NFT
                </li>
                <li>
                  {" "}
                  <img src="images/checkmark.png" width="20px" />
                  <b>Access</b> to our Metaverse Headquarter
                </li>
                <li>
                  {" "}
                  <img src="images/checkmark.png" width="20px" />
                  <b>and</b> all future benefits
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={1} />
          <Col md={12} lg={5} className="mb-5 mt-5 p-4 feature-img-col">
            <img
              src="images/slide-gif.gif"
              className="feature-img"
              width="100%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
