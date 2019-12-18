import React from "react";
import styled from "styled-components";
import { Jumbotron, Container, Button } from "react-bootstrap";

// Importing the image
import img from "../../images/hero1.jpg";

const Styles = styled.div`
  .jumbotron {
    height: 100vh;
  }

  .homeHeroImage {
    background: url(${img}) no-repeat fixed top;
    color: #333;
    posistion: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    posistion: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }

  .homeContent {
    padding-top: 15%;
  }

  .homeHeader1 {
    color: #ffffff;
    font-size: 60px;
    font-weight: 400;
  }

  .homeHeader2 {
    color: #ffffff;
    font-size: 30px;
    font-weight: 400;
  }

  .homeHeader3 {
    color: #ffffff;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    .homeContent {
      padding-top: 25%;
    }

    .homeHeader1 {
      font-size: 36px;
    }

    .homeHeader2 {
      font-size: 22px;
    }
  }
`;

export default function Home() {
  return (
    <Styles id="home">
      <Jumbotron fluid className="homeHeroImage">
        <div className="overlay"></div>
        <Container>
          <div className="homeContent">
            <div className="homeHeader1">Bharath S Vasista</div>
            <p className="homeHeader2">
              <span>Full Stack Web Developer</span>
            </p>
            <h6 className="homeHeader3">Bangalore, Karnataka, India</h6>
            <p>
              <Button variant="light" href="#about">
                About Me
              </Button>
            </p>
          </div>
        </Container>
      </Jumbotron>
    </Styles>
  );
}
