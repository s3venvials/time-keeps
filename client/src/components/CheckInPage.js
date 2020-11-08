import React, { useState } from "react";
import { Container, Form, Button, Alert, Col } from "react-bootstrap";
import { history } from "../helpers";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "70vh",
};

const CheckInPage = () => {
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [submitted, isSubmitted] = useState(false);

  const fields = [
    {
      controlId: "formGridEmail",
      label: "Email",
      type: "email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      placeHolder: "Email",
      col: 12,
    },
    {
      controlId: "formGridDob",
      label: "DOB",
      type: "date",
      value: dob,
      onChange: (e) => setDob(e.target.value),
      placeHolder: "DOB",
      col: 12,
    },
  ];

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      isSubmitted(true);

      if (!email || !dob) {
        return;
      }
      return history.push("/", { Message: "Check In was successfull!" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={styles}>
      <h3>Check In</h3>
      
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          {fields.map((field, index) => {
            return (
              <Col lg={field.col} key={index}>
                <Form.Group controlId={field.controlId}>
                  <Form.Label>{field.label}</Form.Label>
                  <Form.Control
                    type={field.type}
                    value={field.value}
                    placeholder={field.placeHolder}
                    onChange={field.onChange}
                  />
                </Form.Group>

                {submitted && !field.value && (
                  <Alert variant="danger">{`Missing ${field.label}`}</Alert>
                )}
              </Col>
            );
          })}
        </Form.Row>

        <Button type="submit" variant="primary" size="lg">
          Check In
        </Button>
      </Form>
    </Container>
  );
};

export default CheckInPage;
