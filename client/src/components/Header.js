import React from "react";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { history } from "../helpers";

export default function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <DropdownButton
            size="lg"
            id="dropdown-basic-button"
            title="Menu"
          >
            <Dropdown.Item href="#/action-3">Business Portal</Dropdown.Item>
            <Dropdown.Item href="/business/register">Register Business</Dropdown.Item>
            <Dropdown.Item href="/user/register">Register User</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Token Generator</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Check In/Out History
            </Dropdown.Item>
          </DropdownButton>
        </Nav>

        <Navbar.Brand onClick={() => history.push("/")}>
          <i className="far fa-clock fa-lg"></i> Time Keeps
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
