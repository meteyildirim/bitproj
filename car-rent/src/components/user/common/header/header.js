import React from "react";
import { Container } from "react-bootstrap";
// import styled from "styled-components";
import logo from "../../../../assets/img/logo/logo.png";
import { settings } from "../../../../helpers/settings";
import Menubar from "./menubar";
import Topbar from "./topbar";
const Header = () => {
  return (
    <>
      <Container>
        <div className="header">
          <div className="logo">
            <img src={logo} alt={settings.siteName} className="img-fluid" />
          </div>
        </div>
        <div className="menus">
          <Menubar />
          <Topbar />
        </div>
      </Container>
    </>
  );
};

export default Header;
