import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ContactSocial from "./ContactSocial";
import { MdCall } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  return (
    <Container fluid className="contact-section">
      <ContactSocial />
      <Row>
        <Col md={1}></Col>
        <Col md={3} >
          <h1 className="social-heading" > <SiGooglemaps /> Address &nbsp; </h1>
          <a href="https://goo.gl/maps/XCahLX3tbaybDvgQA" style={{ color: "rgb(155 126 172)", fontSize: '1.2rem', fontFamily: 'arial', fontStyle: 'italic' }}> F 192 LIG Colony, Indore (M.P.) | 452011 </a>
        </Col>
        <Col md={4}>
          <h1 className="social-heading" > <MdCall /> Phone Number &nbsp; </h1>
          <a href="tel:+91-8982819315" style={{ color: "rgb(155 126 172)", fontSize: '1.2rem', fontFamily: 'sans-serif', fontStyle: 'italic' }}> +91-8982819315 </a>
        </Col>
        <Col md={3}>
          <h1 className="social-heading" > <IoMdMail /> E-Mail &nbsp; </h1>
          <a href="mailto:ayushgayush120@gmail.com" style={{ color: "rgb(155 126 172)", fontSize: '1.2rem', fontFamily: 'sans-serif', fontStyle: 'italic' }}> ayushgayush120@gmail.com </a>
        </Col>
        <Col md={1}></Col>
      </Row>
      <br /> <br />
    </Container>
  )
}
