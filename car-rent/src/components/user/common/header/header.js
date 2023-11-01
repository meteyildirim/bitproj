import React from "react";
import { Container } from "react-bootstrap";
// import styled from "styled-components";
import logo from "../../../../assets/img/logo/logo.png";
const Header = () => {
  return (
    <>
      <Container>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
