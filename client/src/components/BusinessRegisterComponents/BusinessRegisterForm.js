import React, { useState, useEffect } from "react";
import { Button, Form, Col, Alert } from "react-bootstrap";
import { history } from "../../helpers";

const styles = {
  marginTop: "2em",
  paddingBottom: "75px",
};

const BusinessRegisterPage = (props) => {
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [submitted, isSubmitted] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.formData) setData(props.formData);
  }, [props.formData]);

  useEffect(() => {
    if (data.length) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].label === "Company") setCompany(data[i].value);
        if (data[i].label === "Address") setAddress(data[i].value);
        if (data[i].label === "City") setCity(data[i].value);
        if (data[i].label === "State") setState(data[i].value);
        if (data[i].label === "Zip") setZipcode(data[i].value);
      }
    }
  }, [data]);

  const sendFormData = (data) => props.sendFormData(data);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      isSubmitted(true);

      if (!company || !address || !city || !state || !zipcode) {
        return;
      }

      const formData = [
        { label: "Company", type: "text", value: company },
        { label: "Address", type: "text", value: address },
        { label: "City", type: "text", value: city },
        { label: "State", type: "text", value: state },
        { label: "Zip", type: "text", value: zipcode },
      ];

      for (let i = 0; i < props.formData.length; i++) {
        if (props.formData[i].label === "Email") formData.push({
          label: "Email",
          type: "email",
          value: props.formData[i].value,
        });
        if (props.formData[i].label === "Password") formData.push({
          label: "Password",
          type: "password",
          value: props.formData[i].value,
        });
      }
      sendFormData(formData);

      return history.push("/business/register", { index: 1 });
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
    <div style={styles}>
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
    </div>
  );
};

export default BusinessRegisterPage;
