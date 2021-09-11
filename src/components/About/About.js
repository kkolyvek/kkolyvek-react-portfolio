import React from "react";

// BOOTSTRAP IMPORT
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// LOCAL IMPORTS
import "./About.css";
import portrait from "./assets/image-greenlake-removebg-cropped.png";

function About() {
  return (
    <Container fluid className="custom-container">
      <Container>
        <Row style={{ borderBottom: "2px solid #282828" }}>
          <Col sm={12} lg={6}>
            <div className="about-container">
              <h1 className="about-title">Koppi Kolyvek</h1>
              <div className="about-content">
                <p>
                  Hi there, I'm Koppi. I'm an enthusiastic and quick-learning
                  junior full stack software engineer from the Pacific Northwest
                  starting my journey in the web development world.
                </p>
                <p>
                  In design, I strive to produce elegant yet intuitive solutions
                  that leave the user comfortable and satisfied.
                </p>
                <p>
                  Though new to web development, I have a few years of
                  experience in software as a computer vision engineer and
                  research assistant - as well as a two year stint working in a
                  small, agile structural engineering team.
                </p>
              </div>
              <h1 className="skills-title">Languages and Technical Skills</h1>
              <div>
                <span className="rounded-pill mx-1 my-1 skills-badge">
                  JavaScript
                </span>
                <span className="rounded-pill mx-1 my-1 skills-badge">
                  HTML
                </span>
                <span className="rounded-pill mx-1 my-1 skills-badge">CSS</span>
                <span className="rounded-pill mx-1 my-1 skills-badge">
                  Python
                </span>
                <span className="rounded-pill mx-1 my-1 skills-badge">
                  ReactJS
                </span>
                <span className="rounded-pill mx-1 my-1 skills-badge">
                  Handlebars.js
                </span>
                <span className="rounded-pill mx-1 my-1 skills-badge">
                  MongoDB / Mongoose
                </span>
                <span className="rounded-pill mx-1 my-1 skills-badge">
                  SQL / Sequelize
                </span>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="image-wrapper">
              <img
                src={portrait}
                alt="Portrait of Koppi"
                className="portrait"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
