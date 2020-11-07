import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "70vh",
};

const HomePage = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <Container style={styles}>
      <Row
        style={{
          border: "1px solid #CCC",
          marginBottom: "1em",
          borderRadius: "15px",
        }}
      >
        <h1 style={{ padding: "0.5em" }}>{date.toLocaleTimeString()}</h1>
      </Row>
      <Row>
        <Col lg={12} style={{ marginBottom: "1em" }}>
          <Button variant="primary" size="lg" block>
            Check In
          </Button>
        </Col>
        <Col lg={12}>
          <Button variant="warning" size="lg" block style={{ color: "white" }}>
            Check Out
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;