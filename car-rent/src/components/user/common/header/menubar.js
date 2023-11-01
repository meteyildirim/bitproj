import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  MdOutlineHome,
  MdInfoOutline,
  MdOutlineHeadphones,
  MdDirectionsCar,
} from "react-icons/md";

const Menubar = () => {
  return (
    <div className="menubar">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                <MdOutlineHome />
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/vehicles">
                <MdDirectionsCar />
                Vehicles
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <MdInfoOutline />
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                <MdOutlineHeadphones /> Contact
              </Nav.Link>
            </Nav>
            <div className="register">
              <Button variant="primary" as={Link} to="/auth">
                Register
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
