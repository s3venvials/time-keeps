import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { history } from "../helpers";

export default function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand onClick={() => history.push("/")}>
          <i className="far fa-clock fa-lg"></i> Time Keeps
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={() => history.push("/register")} style={{ color: "white" }}>
            <i className="fas fa-user-plus"></i>
            {" "}
            Register
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
