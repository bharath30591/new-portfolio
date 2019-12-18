import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import verticalBarImage from "../../images/skills-chart-vbar.svg";

const Styles = styled.div`
  .skills_header {
    padding-top: 2%;
    padding-bottom: 2%;
  }

  #skill-chart {
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  #skill-chart #chart-legend {
    // position: absolute;
    float: right;
    width: 100%;
  }

  #skill-chart #chart-legend .label {
    height: 54px;
  }

  #skill-chart #chart-legend li {
    position: absolute;
    left: 0;
    float: none;
    background: 0;
    border-bottom: 1px solid #aaa;
    width: 100%;
  }

  #skill-chart #chart-legend li#label01 {
    top: 220px;

    .legend-label {
      border-right-color: #f44b00;
    }
  }
  #skill-chart #chart-legend li#label02 {
    top: 165px;
    .legend-label {
      border-right-color: #f4b800;
    }
  }
  #skill-chart #chart-legend li#label03 {
    top: 110px;
    .legend-label {
      border-right-color: #beca7d;
    }
  }
  #skill-chart #chart-legend li#label04 {
    top: 55px;
    .legend-label {
      border-right-color: #8ebd7b;
    }
  }
  #skill-chart #chart-legend li#label05 {
    top: 0;
  }

  #skill-chart #chart-legend .legend-label {
    position: static;
    float: right;
    top: auto;
    left: auto;
    display: block;
    font-size: 0.95em;
    line-height: 1.1;
    -webkit-transform: rotate(0deg);
    -webkit-transform-origin: 0 0;
    -moz-transform: rotate(0deg);
    -moz-transform-origin: 0 0;
    -ms-transform: rotate(0deg);
    -ms-transform-origin: 0 0;
    -o-transform: rotate(0deg);
    -o-transform-origin: 0 0;
    transform: rotate(0deg);
    transform-origin: 0 0;
    width: 18.5%;
    padding-top: 4px;
    height: 33px;
    border-right: 5px solid #000;
    margin-top: 16px;
    text-align: left;
  }

  #skill-chart ul {
    list-style: none;
  }

  #skill-chart #chart-data {
    float: left;
    padding-top: 0;
    margin: 0;
    // background: url(${verticalBarImage}) no-repeat 100% 100%;
    width: 80%;
  }

  #skill-chart #chart-data .bar {
    width: 11.11%;
  }

  #skill-chart #chart-data li {
    float: left;
    // background: url(${verticalBarImage}) no-repeat 0 100%;
    border-left: 0 none;
    border-bottom: 1px solid #000;
    height: 220px;
    position: relative;
    margin-top: 38px;
  }

  #skill-chart ul {
    position: relative;
    list-style: none;
  }

  #skill-chart #chart-data #bar01 .data-bar {
    height: 95%;
  }

  #skill-chart #chart-data #bar02 .data-bar {
    height: 80%;
  }
  #skill-chart #chart-data #bar03 .data-bar {
    height: 85%;
  }
  #skill-chart #chart-data #bar04 .data-bar {
    height: 80%;
  }
  #skill-chart #chart-data #bar05 .data-bar {
    height: 80%;
  }
  #skill-chart #chart-data #bar06 .data-bar {
    height: 70%;
  }
  #skill-chart #chart-data #bar07 .data-bar {
    height: 85%;
  }
  #skill-chart #chart-data #bar08 .data-bar {
    height: 45%;
  }
  #skill-chart #chart-data #bar09 .data-bar {
    height: 80%;
  }

  #skill-chart #chart-data .data-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    background: url(${verticalBarImage}) no-repeat 50% 0;
    width: 100%;
  }

  #skill-chart #chart-data .data-label {
    position: absolute;
    bottom: -25px;
    left: 50%;
    line-height: 1;
    font-size: 1.2em;
    font-weight: 400;
    font-style: italic;
    margin-left: 0;
    -webkit-transform: rotate(45deg);
    -webkit-transform-origin: 0 0;
    -moz-transform: rotate(45deg);
    -moz-transform-origin: 0 0;
    -ms-transform: rotate(45deg);
    -ms-transform-origin: 0 0;
    -o-transform: rotate(45deg);
    -o-transform-origin: 0 0;
    /* transform: rotate(45deg); */
    /* transform-origin: 0 0; */
    width: 150px;
  }

  .clearfix:before{
    content: " ";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }
`;

export default function Skills() {
  return (
    <Styles id="skills" style={{ minHeight: "500px" }}>
      <Container>
        <h2 className="text-center skills_header">Skills</h2>
        <div id="skill-chart">
          <ul id="chart-legend">
            <li className="label" id="label01">
              <span className="legend-label">
                <strong>Uh?</strong>
                <br />
                Next question?
              </span>
            </li>
            <li className="label" id="label02">
              <span className="legend-label">
                <strong>Basic</strong>, you can't
                <br />
                always win...
              </span>
            </li>
            <li className="label" id="label03">
              <span className="legend-label">
                <strong>Medium</strong>, I'm trying
                <br />
                to improve.
              </span>
            </li>
            <li className="label" id="label04">
              <span className="legend-label">
                <strong>High</strong>, <br />
                I'm pretty good.
              </span>
            </li>
            <li className="label" id="label05">
              <span className="legend-label">
                I'm the <strong>master</strong>
                <br />
                of the universe.
              </span>
            </li>
          </ul>
          <ul id="chart-data">
            <li className="bar" id="bar01">
              <div className="data-bar">
                <span className="data-label" data-abbr="">
                  <span>JavaScript</span>
                </span>
              </div>
            </li>
            <li className="bar" id="bar02">
              <div className="data-bar">
                <span className="data-label" data-abbr="">
                  <span>html &amp; css</span>
                </span>
              </div>
            </li>
            <li className="bar" id="bar03">
              <div className="data-bar">
                <span className="data-label" data-abbr="">
                  <span>ReactJS</span>
                </span>
              </div>
            </li>
            <li className="bar" id="bar04">
              <div className="data-bar">
                <span className="data-label" data-abbr="">
                  <span>jQuery</span>
                </span>
              </div>
            </li>
            <li className="bar" id="bar05">
              <div className="data-bar">
                <span className="data-label" data-abbr="php">
                  <span>php</span>
                </span>
              </div>
            </li>
            <li className="bar" id="bar06">
              <div className="data-bar">
                <span className="data-label" data-abbr="">
                  <span>nodeJS</span>
                </span>
              </div>
            </li>
            <li className="bar" id="bar07">
              <div className="data-bar">
                <span className="data-label" data-abbr="">
                  <span>MySQL</span>
                </span>
              </div>
            </li>
            <li className="bar" id="bar08">
              <div className="data-bar">
                <span className="data-label" data-abbr="video &amp; 3d">
                  <span>mongoDB</span>
                </span>
              </div>
            </li>
            <li className="bar" id="bar09">
              <div className="data-bar">
                <span className="data-label" data-abbr="flash">
                  <span>Git</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </Styles>
  );
}
