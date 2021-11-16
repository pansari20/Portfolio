import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
// import SkillCard from "./SkillCard";
// import laptopImg from "../../Assets/about.png";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Container>
        {/* <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }} >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong className="purple">What</strong> I Do ?
            </h1>
            <SkillCard />
          </Col>
          <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row> */}
        <Techstack />
      </Container>
    </Container>
  );
}

export default Skills;
