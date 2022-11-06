import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myFoto from "../assets/myFoto.jpg";

export const AboutMe = () => {
  return (
    <Container id="about-me" className=" mt-3 py-5">
      <div className="title">
        <span>About Me</span>
      </div>
      <Row>
        <Col md="5" className=" mb-5">
          <img src={myFoto} alt="myFoto" width="100%" />
        </Col>
        <Col md="7">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            sapiente? Id quibusdam illo ipsam dignissimos, distinctio suscipit
            veniam? Facere beatae nisi cupiditate eos harum praesentium
            doloribus iure natus illo quam.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            pariatur quas animi excepturi reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            pariatur quas animi excepturi reprehenderit.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
