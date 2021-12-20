import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Details() {
  return (
    <Container>
      <Row>
        <Col>
          <strong>Name of Product: </strong>
        </Col>
        <Col>Product#1</Col>
      </Row>
    </Container>
  );
}

export default Details;
