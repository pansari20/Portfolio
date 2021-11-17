import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaHeart, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hrs = date.getHours() ;
  let mins = date.getMinutes() ;
  let secs = date.getSeconds();

  const getTime = ()=>{
    date = new Date();
    hrs = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    if(secs<10) secs = '0' + secs;
    if(mins<10) mins = '0' + mins;
    if(hrs<10) hrs = '0' + hrs;
    let str = hrs + ':' + mins + ':' + secs;
    if(hrs<12) str+=' AM';
    else str+=' PM';
    document.getElementById('time-update').innerHTML = str;
  }
  setInterval(getTime, 1000);

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made with <FaHeart /> by <i><b className="purple"> Pansari Ji </b></i></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3 style={{fontFamily: 'sans-serif', fontStyle: 'italic'}}>{day}/{month+1}/{year} - <span id="time-update"></span> </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/pansari20"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ayush-pansari-5300781b7/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/pansari_ayush"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
