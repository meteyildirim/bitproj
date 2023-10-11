import React from "react";
import Header from "../components/user/common/header/header";
import Footer from "../components/user/common/footer/footer";

const UserTemplate = ({ childeren }) => {
  return (
    <>
      <Header />
      {childeren}
      <Footer />
    </>
  );
};

export default UserTemplate;
