import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="ACE-METAL"
              description=" ACE METAL is a website that showcases a class project we worked on using WordPress. The project aimed to create an online platform to highlight the services and offerings of ACE METAL, a company that works tirelessly to provide personalized and innovative solutions to clients of all sizes, including small, medium, and large enterprises. The project emphasized ACE METAL's commitment to helping clients reduce costs and improve productivity on a daily basis."
              demoLink="https://youtu.be/FmkrxhMcaYc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Pokemon"
              description="The project is a React Native mobile app that displays Pokémon creatures' images fetched from a JSON file. With a user-friendly interface, users can explore Pokémon in a card format, swiping through the collection.  It provides a visually appealing and responsive experience, allowing users to appreciate and discover Pokémon creatures easily."
              ghLink="https://github.com/AcetaCrenu/PokemonProject"
              demoLink="https://snack.expo.dev/@git/github.com/AcetaCrenu/PokemonProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Cyber Security"
              description="This project involved utilizing various technologies such as Nmap, Nikto, Burp Suite, brute force, and Wepallayzer to study and identify potential vulnerabilities, threats, and cyberattacks that our UCD's websites may encounter. The primary objective was to enhance the security of these websites through specific measures. This included enforcing a strong website policy, improving the security of the hosting provider, further securing authentication processes, and protecting users and root administration. By implementing these actions, the project aimed to mitigate risks, safeguard the UCD's websites, and ensure a secure online environment."
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
