import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Col } from "react-bootstrap";
import { history } from "../../helpers";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "70vh",
};

const BusinessRegisterAuth = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, isSubmitted] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.formData) setData(props.formData);
  }, [props.formData]);

  useEffect(() => {
    if (data.length) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].label === "Email") setUsername(data[i].value);
        if (data[i].label === "Password") setPassword(data[i].value);
      }
    }
  }, [data]);

  const fields = [
    {
      controlId: "formGridUsername",
      label: "Email",
      type: "email",
      value: username,
      onChange: (e) => setUsername(e.target.value),
      placeHolder: "Email",
      col: 12,
    },
    {
      controlId: "formGridPass",
      label: "Password",
      type: "password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      placeHolder: "Password",
      col: 12,
    },
  ];

  const sendFormData = (data) => props.sendFormData(data);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      isSubmitted(true);

      if (!username || !password) {
        return;
      }

      let flag = true;

      for (let i = 0; i < props.formData.length; i++) {
        if (props.formData[i].label === "Email") {
          flag = false;
          props.formData[i].value = username;
        }
        if (props.formData[i].label === "Password")
          props.formData[i].value = password;
      }

      if (flag) {
        props.formData.push({
          label: "Email",
          type: "email",
          value: username,
        });
        props.formData.push({
          label: "Password",
          type: "password",
          value: password,
        });
      }

      sendFormData(props.formData);
      return history.push("/business/register", { index: 2 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles}>
      <h3>Create An Account</h3>

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
        <Button type="submit" variant="primary">
          Submit
        </Button>{" "}
        <Button
          onClick={() => {
            sendFormData(data);
            history.push("/business/register", { index: 0 });
          }}
          variant="warning"
        >
          Back
        </Button>
      </Form>
    </div>
  );
};

export default BusinessRegisterAuth;
