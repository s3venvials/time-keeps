import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import BusinessRegisterForm from "./BusinessRegisterComponents/BusinessRegisterForm";
import BusinessRegisterAuth from "./BusinessRegisterComponents/BusinessRegisterAuth";
import BusinessRegisterReview from "./BusinessRegisterComponents/BusinessRegisterReview";

const styles = {
  marginTop: "2em",
  paddingBottom: "75px",
};

const BusinessRegisterPage = (props) => {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    if (props.location.state) {
      setIndex(props.location.state.index);
    }
  }, [props.location.state]);

  const receiveFormData = (data) => setFormData(data);

  return (
  <Container style={styles}>
    {index === 0 && <BusinessRegisterForm formData={formData} sendFormData={receiveFormData} />}
    {index === 1 && <BusinessRegisterAuth formData={formData} sendFormData={receiveFormData} />}
    {index === 2 && <BusinessRegisterReview formData={formData} sendFormData={receiveFormData} />}
  </Container>
  );
};

export default BusinessRegisterPage;
