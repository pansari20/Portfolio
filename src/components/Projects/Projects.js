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
        <i style={{ color: "rgb(155 126 172)" }}>
          A few projects I've worked on, more coming soon... 
        </i>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chesswithfriends}
              isHosted={true}
              title="Chess With Friends"
              description={ <p> A multiplayer online Chess game, where user can create a unique link of Chess game and send it to a friend. Players can also have a video call while playing. <br /> <br /> <strong class="purple"> Techs Used: </strong> <i> React, WebRtc, Simple-Peer, Node.js, Socket.io, Chess.js </i> </p> }
              link="https://chesswithfriend.herokuapp.com"
              codeLink="https://github.com/pansari20/ChessApp"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={peoplechat}
              isHosted={true}
              title="People Chat"
              description={ <p> A Chat platform, where people can create or join a specific room and convey their messages. It is simple, fast and secure as Sockets are used to transfer messages. <br /> <br /> <strong class="purple"> Techs Used: </strong> <i> Node.js, Socket.io, HTML, CSS, Heroku</i> </p> }
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
