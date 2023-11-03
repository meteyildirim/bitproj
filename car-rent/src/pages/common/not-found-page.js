import React from "react";
import UserTemplate from "../../templates/user-template";
import { Col, Container, Row } from "react-bootstrap";
import "./notfound.scss";
const NotFoundPage = () => {
  return (
    <>
      <UserTemplate>
        <div className="nofound404">
          <h1 className="text404">404</h1>
          <h3 className="message">The page you are looking for is not found</h3>
        </div>
      </UserTemplate>
      ;
    </>
  );
};

export default NotFoundPage;
