import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../../assets/img/logo/logo.png";
import {
  MdOutlineHome,
  MdInfoOutline,
  MdOutlineHeadphones,
  MdDirectionsCar,
  MdOutlinePrivacyTip,
} from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container">
        <Row>
          <Col md={6} lg={3}>
            <Link to="/">
              <img src={logo} alt=""></img>
            </Link>
            <p>
              Check out our new fleet of cars, latest offers, our advantages and
              free extras online. Choose from one of our new car models.
            </p>
          </Col>
          <Col md={6} lg={3}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">
                  <MdOutlineHome />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/vehicles">
                  <MdDirectionsCar />
                  Vehicles
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <MdOutlineHeadphones />
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <MdInfoOutline />
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy">
                  <MdOutlinePrivacyTip />
                  Privacy policy
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3}></Col>
          <Col md={6} lg={3}></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
