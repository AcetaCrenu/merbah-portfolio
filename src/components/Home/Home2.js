import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
              
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Programming captured my heart, and it seems I've acquired a decent amount of knowledge, or so I believe...
              <br />
              <br />The realms of
              <i>
                <b className="purple"> Javascript, Java and Python </b>
              </i>flow through me effortlessly.


              <br />
              <br />
              My passion lies in crafting innovative web technologies and products, as well as exploring the intricacies of Deep Learning and Natural Language Processing.

When the opportunity arises, I embrace my fervor for creating masterpieces with Node.js, accompanied by contemporary Javascript libraries and frameworks such as  &nbsp;
              <i>
                <b className="purple"> React.js</b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Feel free to <span className="purple">connect </span>with me</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                href="https://github.com/AcetaCrenu/"
                target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                href="https://www.linkedin.com/in/houda-merbah-33bb05233/"
                target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                href="https://instagram.com/aceta_crenu?igshid=Y2M0YTlkZGNmOQ=="
                target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
