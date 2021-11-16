import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";

function HomeAbout() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is Ayush Pansari, third year student at <a href="https://www.sgsits.ac.in/" target="_blank" rel="noreferrer" className="purple"><strong> SGSITS Indore</strong></a> currently pursuing <strong className="purple">B.Tech.</strong>
              <br />
              <br />
              My field of Interests are <i><b className="purple"> Developing Applications </b></i> using different techs, <i><b className="purple"> Solving Algorithms </b></i> to work efficiently, and <i><b className="purple"> Competitive Programming </b></i> among top coders.
              <br />
              <br />
              I'm a Competitive Coder & Full-Stack Developer, Mostly i've worked with
              <i>
                <b className="purple"> C++, Javascript and React. </b>
              </i>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <br />
        <i style={{fontSize: '1.2rem', color: 'rgb(155 126 172)', backgroundColor: 'rgba(36, 2, 44, 0.459)'}}> " Apart from coding I enjoy playing <strong> Badminton,</strong> cooking <strong> Food,</strong> doing some <strong> Gym </strong> and most importantly <strong>Sleep 😄.</strong> " </i>
        <br />
        <br />
      </Container>
    </Container>
  );
}
export default HomeAbout;
