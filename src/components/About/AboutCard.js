import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Merbah Houda </span>
            from <span className="purple"> Casablanca, Morocco.</span>
            <br />I am currently a student of Computer Engineering and Emerging Technologies at ENSAJ. The IITE (Information Technology and Emerging Technologies Engineering) program allows me to deepen my knowledge and skills in the field of computer science, with a focus on emerging technologies that are shaping the future of our society. As a dedicated student, I am passionate about learning and applying innovative concepts to solve complex problems. I actively engage in my studies and constantly strive to improve myself to stay at the forefront of the latest technological advancements. With a strong academic background and a drive for continuous growth, I am determined to achieve excellence in my studies and future career. Being a resident of Casablanca, I am fortunate to be part of a dynamic city that offers numerous opportunities for personal and professional development. I am excited about the possibilities that lie ahead and eager to contribute to the field of computer engineering and emerging technologies, making a positive impact in my community and beyond.
            <br />
            <br />
           
          </p>
          

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
