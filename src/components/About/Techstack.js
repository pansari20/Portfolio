import React from "react";
import { Col, Row, OverlayTrigger } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiNodejs, DiReact, DiJavascript1, DiPython, DiDjango } from "react-icons/di";
import { SiMongodb, SiGithub, SiVercel, SiExpress } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const overlayStyle = {
  color: 'rgba(36, 2, 44, 0.459)', 
  fontSize: '1.2rem', 
  backgroundColor: 'white', 
  padding: '0 10px',
  borderRadius: '5px'
}

function IconViewer(props) {
  return (
    <OverlayTrigger placement={props.place} overlay={<span style={ overlayStyle }>{props.text}</span>} >
      <Col xs={4} md={2} className="tech-icons">
        {props.icon}
      </Col>
    </OverlayTrigger>
  )
}

function Techstack() {

return (
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

    <IconViewer place="top" text="C++" icon={<CgCPlusPlus />} />
    <IconViewer place="top" text="JavaScript" icon={<DiJavascript1 />} />
    <IconViewer place="top" text="NodeJS" icon={<DiNodejs />} />
    <IconViewer place="top" text="MongoDB" icon={<SiMongodb />} />
    <IconViewer place="top" text="React" icon={<DiReact />} />

    <IconViewer place="top" text="Python" icon={<DiPython />} />
    <IconViewer place="top" text="HTML" icon={<TiHtml5 />} />
    <IconViewer place="top" text="GitHub" icon={<SiGithub />} />
    <IconViewer place="top" text="Vercel" icon={<SiVercel />} />
    <IconViewer place="top" text="Django" icon={<DiDjango />} />
    
    <IconViewer place="top" text="Express" icon={<SiExpress />} />
    <IconViewer place="top" text="Django" icon={<DiDjango />} />
  </Row>
);
}

export default Techstack;
