import React from "react";
import myFoto from "../assets/myFoto.jpg";
import { TopNav } from "./TopNav";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Hero = () => {
  return (
    <div className="hero">
      <TopNav />

      <Container>
        <Row className="mt-5 py-3">
          <Col md="6" className="text-center order-md-2">
            <img src={myFoto} width="80%" alt="" />
          </Col>
          <Col md="6" className="mt-3 pb-3">
            hi 👋 i'm
            <div className="fs-1 fw-bolder mb-5">Shankar Budhathoki</div>
            <p>
              I love codiong and solving problems with code and teaching to
              other what i know that makes me feel happy
            </p>
            <Button variant="danger">Download Resume</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
