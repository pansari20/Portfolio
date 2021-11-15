import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import portfolio from "../../Assets/Projects/portfolio.png";
import textmodifier from "../../Assets/Projects/textmodifier.png";
import chesswithfriends from "../../Assets/Projects/chesswithfriends.png";
import peoplechat from "../../Assets/Projects/peoplechat.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <i style={{ color: "white" }}>
          A few projects I've worked on, more coming soon... 
        </i>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chesswithfriends}
              isHosted={true}
              title="Chess With Friends"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://chesswithfriend.herokuapp.com"
              codeLink="https://github.com/pansari20/ChessApp"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={peoplechat}
              isHosted={true}
              title="People Chat"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://peoplechats.herokuapp.com/"
              codeLink="https://github.com/pansari20/People-Chat"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={textmodifier}
              isHosted={true}
              title="Text Modifier"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://pansari20.github.io/Text-Modifier"
              codeLink="https://github.com/pansari20/Text-Modifier/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isHosted={true}
              title="Personal Portfolio"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://pansari20.github.io/Text-Modifier"
              codeLink="https://github.com/pansari20/Text-Modifier/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
