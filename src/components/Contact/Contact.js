import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineDownload } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import pdfresume from "../../Assets/ayush-pansari-resume.pdf"

export default function Contact() {
  return (
    <Container fluid className="contact-section">
      <Container>
        <Col md={12} className="home-about-social">
          <h1 className="project-heading">Find ME</h1>
          <Row>
            <Col md={12}>
              <Button variant="primary" href={pdfresume} target="_blank">
                <AiOutlineDownload />
                &nbsp; Download Resume
              </Button>
            </Col>
          </Row>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/pansari20"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ayush-pansari-5300781b7/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/pansari_ayush"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/ayushgayush120"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </Col>
      </Container>
    </Container>
  )
}
