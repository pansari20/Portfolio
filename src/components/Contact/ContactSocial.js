import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineDownload } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import pdfresume from "../../Assets/ayush-pansari-resume.pdf";
import socialHouse from "../../Assets/socialHouse.svg";
import { SiGmail } from "react-icons/si";

function SocialIcon(props) {
    return (
        <li className="social-icons">
            <a href={props.link} target="_blank" rel="noreferrer" className="icon-colour home-social-icons" >
                {props.icon} 
            </a>
        </li>
    )
}

export default function ContactSocial() {
    return (
        <Container>
            <Row>
                <Col md={6} >
                    <img src={socialHouse} alt="Img" className="img-fluid" />
                </Col>
                <Col md={2} ></Col>
                <Col md={4} className="contact-social">
                    <h2 style={{ fontSize: "2.6em" }}>Find<strong className="purple"> ME </strong> </h2>

                    <i style={{color: 'rgb(155 126 172)'}} >
                        Feel free to <span className="purple">connect </span>with me. I will reply within 24 hours.
                    </i> <br /> <br />
                    <ul className="home-about-social-links">
                        <SocialIcon icon={<AiFillGithub />} link="https://github.com/pansari20" />
                        <SocialIcon icon={<FaLinkedinIn />} link="https://www.linkedin.com/in/ayush-pansari-5300781b7/" />
                        <SocialIcon icon={<SiGmail />} link="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=ayushgayush120@gmail.com" />
                        <SocialIcon icon={<AiOutlineTwitter />} link="https://twitter.com/ayushgayush120" />
                        <SocialIcon icon={<AiFillInstagram />} link="https://instagram.com/pansari_ayush" />
                    </ul>
                    <br /> <br /> <br />
                    <Button variant="primary" href={pdfresume} target="_blank">
                        <AiOutlineDownload />
                        &nbsp; Download Resume
                    </Button>
                </Col>
            </Row>
            <br /> <br />
            <hr style={{border: '1px solid purple'}} />
        </Container>
    )
}
