import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { history } from "../../helpers";

const styles = {
  marginTop: "2em",
  paddingBottom: "75px",
};

const BusinessRegisterReview = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.formData) setData(props.formData);
  }, [props.formData]);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      return history.push("/", {
        Message: "Business Registration was successfull!",
      });
    } catch (error) {
      return;
    }
  };

  const sendFormData = (data) => props.sendFormData(data);

  return (
    <div style={styles}>
      <h3>Business Register Review</h3>

      <Form onSubmit={handleSubmit}>
        {data.map((item, index) => {
          return (
            <Form.Group key={index}>
              <Form.Label>{item.label}</Form.Label>
              <Form.Control type={item.type} value={item.value} readOnly />
            </Form.Group>
          );
        })}

        <Button type="submit" variant="primary">
          Submit
        </Button>{" "}
        <Button
          onClick={() => {
            sendFormData(data);
            history.push("/business/register", { index: 1 });
          }}
          variant="warning"
        >
          Back
        </Button>
      </Form>
    </div>
  );
};

export default BusinessRegisterReview;
