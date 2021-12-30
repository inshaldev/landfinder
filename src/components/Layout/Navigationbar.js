import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../containers/Login/Login';
import SignUp from '../../containers/SignUp/SignUp';
import '../../stylesheets/styles.css';

export const Navigationbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Navbar
      className="navbar bg-primary"
      collapseOnSelect
      expand="md"
      variant="dark"
    >
      <Container>
        <Link className="navbar-brand" to="/">
          Land<span className="fw-bold">Finder.</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active border-bottom border-2 nav-link-custom'
                  : 'nav-link nav-link-custom'
              }
            >
              Properties
            </NavLink>
          </Nav>
          <div className="d-flex flex-column flex-lg-row gap-3 justify-content-center align-items-start">
            {/* <Button variant="outline-light" onClick={() => setShowLogin(true)}>
              Log In
            </Button> */}
            <Button
              variant="light"
              className="text-primary"
              onClick={() => setShowSignUp(true)}
            >
              Join as an Agency
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
      <Login show={showLogin} onHide={() => setShowLogin(false)} />
      <SignUp show={showSignUp} onHide={() => setShowSignUp(false)} />
    </Navbar>
  );
};
