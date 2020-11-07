import React from "react";
import { Route, Router } from "react-router-dom";
import { history } from "../helpers";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import RegistrationPage from "./RegisterPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router history={history}>
      <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegistrationPage} />
      <Footer />
    </Router>
  )
}

export default App;
