import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";

import otherSkillsHeroImage from "../../images/otherSkillsHeroImage.svg";

const Styles = styled.div`
  color: #ffffff;

  .ohter-skills-hero-image {
    background-color: #145075;
    background-image: url(${otherSkillsHeroImage});
  }

  .other-skills-header {
    padding-top: 2%;
    padding-bottom: 2%;
  }

  .other-skill-list {
    font-size: 22px;
    font-style: italic;
  }
`;

export default function OtherSkills() {
  return (
    <Styles>
      <div className="ohter-skills-hero-image">
        <Container>
          <h3 className="text-center other-skills-header">Other Skills</h3>
          <Row>
            <Col>
              <ul>
                <Row className="justify-content-md-center other-skill-list">
                  <Col>
                    <li>Solr</li>
                  </Col>
                  <Col>
                    <li>Redis</li>
                  </Col>
                  <Col>
                    <li>AWS</li>
                  </Col>
                  <Col>
                    <li>Nylas</li>
                  </Col>
                  <Col>
                    <li>Stripe</li>
                  </Col>
                  <Col>
                    <li>Twilio</li>
                  </Col>
                  <Col>
                    <li>Google API's</li>
                  </Col>
                </Row>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </Styles>
  );
}
