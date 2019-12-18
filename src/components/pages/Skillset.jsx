import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import skillSetHeroImage from "../../images/skillSetHeroImage.svg";

const Styles = styled.div`
  .skillSetHeroImage {
    background-color: #145075;
    background-image: url(${skillSetHeroImage});
  }

  .skillSetContainer {
    color: #ffffff;
  }

  .skill-set-header {
    padding-top: 2%;
  }

  .skillSetTextRow {
    padding-top: 5%;
    padding-bottom: 3%;
  }

  .skillSetText {
    color: #dbdcdd;
  }

  .skill-set-logo {
    font-size: 40px;
  }
`;

export default function Skillset() {
  return (
    <Styles id="skillSet">
      <div className="skillSetHeroImage">
        <Container>
          <div className="skillSetContainer">
            <h2 className="skill-set-header text-center">Skill Set</h2>
            <Row className="justify-content-md-center text-center skillSetTextRow">
              <Col className="skillSetText" xs lg="3">
                <div>
                  <i className="fas fa-file-code skill-set-logo"></i>
                </div>
                <h4>Frontend Development</h4>
                <p>Making things look good online is my specialty</p>
              </Col>
              <Col className="skillSetText" xs lg="3">
                <div>
                  <i className="fas fa-server skill-set-logo"></i>
                </div>
                <h4>Backend Development</h4>
                <p>Powering applications with server side logic and API's</p>
              </Col>
              <Col className="skillSetText" xs lg="3">
                <div>
                  <i className="fas fa-database skill-set-logo"></i>
                </div>
                <h4>Handling Database</h4>
                <p>Handling and Organizing Data for better Performance</p>
              </Col>
              <Col className="skillSetText" xs lg="3">
                <div>
                  <i className="fas fa-cloud skill-set-logo"></i>
                </div>
                <h4>Cloud Servers</h4>
                <p>Have experience in maintaining Cloud servers in AWS</p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Styles>
  );
}
