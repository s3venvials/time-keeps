import React from "react";
import { Route, Router } from "react-router-dom";
import { history } from "../helpers";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import RegistrationPage from "./RegisterPage";
import BusinessRegisterPage from "./BusinessRegisterPage";
import CheckInPage from "./CheckInPage";
import CheckOutPage from "./CheckOutPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router history={history}>
      <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/register" component={RegistrationPage} />
        <Route exact path="/business/register" component={BusinessRegisterPage} />
        <Route exact path="/checkin" component={CheckInPage} />
        <Route exact path="/checkout" component={CheckOutPage} />
      <Footer />
    </Router>
  )
}

export default App;
