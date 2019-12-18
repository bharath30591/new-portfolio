import React from "react";
import styled from "styled-components";

import contactMeHeroImage from "../../images/contactMeHeroImage.svg";
import { Row, Col, Container } from "react-bootstrap";

const Styles = styled.div`
  .contactMeHeroImage {
    background-color: #145075;
    background-image: url(${contactMeHeroImage});
  }
  .contact-me-container {
    color: #ffffff;
  }

  .contact-me-header {
    padding-top: 2%;
    padding-bottom: 2%;
  }

  .social-profile {
    font-size: 2em;
    text-align: center;
    padding: 2% 0;
    a {
      text-decoration: none;
      color: #ffffff;
      padding-right: 2%;
    }
  }

  .contact-email {
    font-size: 20px;
  }
`;

export default function ContactMe() {
  return (
    <Styles id="contactme">
      <div className="contactMeHeroImage">
        <Container>
          <div className="contact-me-container">
            <h2 class="text-center contact-me-header">Contact Me</h2>
            <Row>
              <Col className="text-center">
                <div className="contact-email">
                  The best way to contact me is by dropping me an email to{" "}
                  <a href="mailto:someone@example.com">
                    bharath.30591@gmail.com
                  </a>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="social-profile">
                <a
                  href="https://www.facebook.com/bharath.vasishta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/bharath-vasishta-3b1b5a22/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/bharath30591"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github"></i>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Styles>
  );
}
