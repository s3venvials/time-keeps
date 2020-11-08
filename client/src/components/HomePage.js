import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Alert } from "react-bootstrap";
import { history } from "../helpers";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "70vh",
};

const HomePage = (props) => {
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    if (props.location.state) {
      setMessage(props.location.state.Message);
    }
    const timeOut = setTimeout(() => { setMessage("") }, 5000);

    return function cleanup() {
      clearTimeout(timeOut);
    }
  }, [props.location.state]);

  return (
    <Container style={styles}>
      {message && <Alert variant="success">{message}</Alert>}

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
          <Button onClick={() => history.push("/checkin")} variant="primary" size="lg" block>
            Check In
          </Button>
        </Col>
        <Col lg={12}>
          <Button onClick={() => history.push("/checkout")} variant="warning" size="lg" block style={{ color: "white" }}>
            Check Out
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;