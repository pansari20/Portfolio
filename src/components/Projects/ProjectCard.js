import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { CgGitFork } from "react-icons/cg";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title> <strong className="purple"> {props.title} </strong> </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="container">
        <Button variant="primary" href={props.codeLink} target="_blank">
          <CgGitFork />
          View Code
        </Button>
        &nbsp;&nbsp;
        {props.isHosted ? 
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          Visit Site
        </Button> : ""}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
