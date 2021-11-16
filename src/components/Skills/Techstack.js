import React from "react";
import { Col, Row, OverlayTrigger } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiNodejs, DiReact, DiJavascript1, DiPython, DiDjango } from "react-icons/di";
import { SiMongodb, SiGithub, SiVercel, SiExpress, SiVisualstudiocode, SiHeroku, SiCodechef, SiCodeforces } from "react-icons/si";
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
    <OverlayTrigger placement={props.place} overlay={<span style={overlayStyle}>{props.text}</span>} >
      <Col xs={4} md={2} className="tech-icons">
        {props.icon}
      </Col>
    </OverlayTrigger>
  )
}

function Techstack() {
  return (
    <>
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>
      <i style={{ color: "rgb(155 126 172)"}}>
        Technologies I've worked with... 
      </i>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

        <IconViewer place="top" text="C++" icon={<CgCPlusPlus />} />
        <IconViewer place="top" text="JavaScript" icon={<DiJavascript1 />} />
        <IconViewer place="top" text="React" icon={<DiReact />} />
        <IconViewer place="top" text="NodeJS" icon={<DiNodejs />} />
        <IconViewer place="top" text="MongoDB" icon={<SiMongodb />} />

        <IconViewer place="top" text="HTML" icon={<TiHtml5 />} />
        <IconViewer place="top" text="GitHub" icon={<SiGithub />} />
        <IconViewer place="top" text="Vercel" icon={<SiVercel />} />
        <IconViewer place="top" text="Django" icon={<DiDjango />} />
        <IconViewer place="top" text="Python" icon={<DiPython />} />

        <IconViewer place="top" text="Express" icon={<SiExpress />} />
        <IconViewer place="top" text="VS Code" icon={<SiVisualstudiocode />} />
        <IconViewer place="top" text="Heroku" icon={<SiHeroku />} />
      </Row>

      <h1 className="project-heading">
        Coding <strong className="purple"> Profiles </strong>
      </h1>
      <i style={{ color: "rgb(155 126 172)" }}>
        Visit platforms i code on...  
      </i>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <IconViewer place="bottom" text="Codechef" icon={ <a style={{color: 'white'}} target="_blank" rel="noreferrer" href="https://codechef.com/users/pansari_ayush"> <SiCodechef /> </a> } />
        <IconViewer place="bottom" text="GitHub" icon={ <a style={{color: 'white'}} target="_blank" rel="noreferrer" href="https://github.com/pansari20"> <SiGithub /> </a> } />
        <IconViewer place="bottom" text="Codeforces" icon={ <a style={{color: 'white'}} target="_blank" rel="noreferrer" href="https://codeforces.com/profile/pansari_ayush"> <SiCodeforces /> </a> } />
      </Row>
    </>
  );
}

export default Techstack;
