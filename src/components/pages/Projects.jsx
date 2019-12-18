import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import someImage from "../../images/hero1.jpg";

const Styles = styled.div`
  .projects-header {
    padding-top: 2%;
    padding-bottom: 2%;
  }

  .project-item {
    padding-bottom: 2%;
  }

  .project-cards {
    min-height: 250px;
    max-height: 250px;
    height: 250px;
  }

  .project-image-container {
    height: 250px;
  }
`;

export default function Projects() {
  return (
    <Styles id="projects">
      <Container>
        <h2 className="text-center projects-header">Projects</h2>
        <Row className="project-item">
          <Col xs={12} md={4} lg={4}>
            <Card className="project-cards">
              <Card.Img
                className="project-image-container"
                variant="top"
                src="https://s3.amazonaws.com/madgigs-home/images/mg-logo.svg"
              />
            </Card>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <Card className="project-cards">
              <Card.Header>Madgigs Corp</Card.Header>
              <Card.Body>
                <Card.Title>Senior FullStack Developer</Card.Title>
                <Card.Text>
                  Built the complete recruitment tool for recruiters.
                </Card.Text>
                <Button variant="primary">Visit Website</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="project-item">
          <Col xs={12} md={4} lg={4}>
            <Card className="project-cards">
              <Card.Img
                className="project-image-container"
                variant="top"
                src={someImage}
              />
            </Card>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <Card className="project-cards">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="project-item">
          <Col xs={12} md={4} lg={4}>
            <Card className="project-cards">
              <Card.Img
                className="project-image-container"
                variant="top"
                src={someImage}
              />
            </Card>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <Card className="project-cards">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}
