import React, { useState } from "react";
import { Container, Button, Form, Col, Alert } from "react-bootstrap";
import { history } from "../helpers";

const styles = {
  minHeight: "100vh",
  marginTop: "2em"
};

const BusinessRegisterPage = () => {
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [submitted, isSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      isSubmitted(true);

      if (
        !company ||
        !address ||
        !city ||
        !state ||
        !zipcode
      ) {
        return;
      }
      return history.push("/", {
        Message: "Business registration was successfull!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fields = [
    {
      controlId: "formGridCompanyName",
      label: "Company Name",
      type: "text",
      value: company,
      onChange: (e) => setCompany(e.target.value),
      placeHolder: "Company Name",
      col: 12,
    },
    {
      controlId: "formGridAddress1",
      label: "Address",
      type: "text",
      value: address,
      onChange: (e) => setAddress(e.target.value),
      placeHolder: "Address",
      col: 12,
    },
    {
      controlId: "formGridCity",
      label: "City",
      type: "text",
      value: city,
      onChange: (e) => setCity(e.target.value),
      placeHolder: "City",
      col: 4,
    },
    {
      controlId: "formGridState",
      label: "State",
      type: "text",
      value: state,
      onChange: (e) => setState(e.target.value),
      placeHolder: "State",
      col: 4,
    },
    {
      controlId: "formGridZip",
      label: "Zip",
      type: "text",
      value: zipcode,
      onChange: (e) => setZipcode(e.target.value),
      placeHolder: "Zip",
      col: 4,
    },
  ];

  return (
    <Container style={styles}>
      <h3>Business Registration</h3>

      <Form style={{ marginTop: "2em" }} onSubmit={handleSubmit}>
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
                  <Alert variant="danger">{`Please provide a ${field.label}`}</Alert>
                )}
              </Col>
            );
          })}
        </Form.Row>

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BusinessRegisterPage;
