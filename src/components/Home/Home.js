import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import About from "./About";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> AYUSH PANSARI</strong>
              </h1>
              <br />
              <h1 className="heading-name"> <strong style={{ fontStyle: 'italic', marginBlockEnd: 0, color: "rgb(155 126 172)", backgroundColor: 'rgba(36, 2, 44, 0.459)', fontSize: '1.3rem' }}> A passionate coder and enthusiastic learner who always thrive to work on different technologies and learn to work optimally.</strong></h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;
