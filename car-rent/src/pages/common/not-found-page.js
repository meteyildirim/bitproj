import React from "react";
import UserTemplate from "../../templates/user-template";
import Notfound from "../../components/common/notfound/notfound";

const NotFoundPage = () => {
  return (
    <>
      <UserTemplate>
        <Notfound />
      </UserTemplate>
      ;
    </>
  );
};

export default NotFoundPage;
