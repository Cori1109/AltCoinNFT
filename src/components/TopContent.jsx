import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";

export default function TopContent() {
  return (
    <div
      id="features"
      className="banner-container mb-5"
      style={{ marginTop: -35 }}
    >
      <Container className="p-3 pt-5">
        <Row style={{ justifyContent: "center", display: "flex" }}>
          <Col md={4} sm={12}>
            <div class="service-one__single">
              <span class="service-one__dot-1"></span>
              <span class="service-one__dot-2"></span>
              <span class="service-one__dot-3"></span>
              <div class="service-one__icon">
                <img src="images/laptop.png" className="lums-icon-laptop" />
              </div>
              <h3 class="service-one__title">
                <a href="#">
                  Duck Holder <br /> Rewards
                </a>
              </h3>
              <p class="service-one__text">
                Win prizes, whitelist spots
                <br /> and more <br /> each and every week.
              </p>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div class="service-one__single">
              <span class="service-one__dot-1"></span>
              <span class="service-one__dot-2"></span>
              <span class="service-one__dot-3"></span>
              <div class="service-one__icon">
                <img
                  src="images/presentation.png"
                  className="lums-icon-presentation"
                />
              </div>
              <h3 class="service-one__title">
                <a href="#">
                  DAO <br /> Voting
                </a>
              </h3>
              <p class="service-one__text">
                Take part in our DAO
                <br /> by submitting ideas & voting for <br /> or against
                others. week.
              </p>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div class="service-one__single">
              <span class="service-one__dot-1"></span>
              <span class="service-one__dot-2"></span>
              <span class="service-one__dot-3"></span>
              <div class="service-one__icon">
                <img src="images/target.png" className="lums-icon-target" />
              </div>
              <h3 class="service-one__title">
                <a href="#">
                  Ultimate <br /> Bragging Rights
                </a>
              </h3>
              <p class="service-one__text">
                There will only ever be 10,000 ducks.
                <br /> If you get one you deserve to <br /> show it to the
                world.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
