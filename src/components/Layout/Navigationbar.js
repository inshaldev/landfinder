import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Login from '../../containers/Login/Login';
import SignUp from '../../containers/SignUp/SignUp';
import '../../stylesheets/layout.css';

export const Navigationbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#">
          Land<span className="fw-bold">Finder.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown title="Properties" id="basic-nav-dropdown">
              <NavDropdown.Item href="#rent">For Rent</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#sale">For Sale</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex flex-column flex-lg-row gap-3 justify-content-center align-items-start">
            <Button variant="outline-light" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
            <Button
              variant="light"
              className="text-primary"
              onClick={() => setShowSignUp(true)}
            >
              Sign Up
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
      <Login show={showLogin} onHide={() => setShowLogin(false)} />
      <SignUp show={showSignUp} onHide={() => setShowSignUp(false)} />
    </Navbar>
  );
};
