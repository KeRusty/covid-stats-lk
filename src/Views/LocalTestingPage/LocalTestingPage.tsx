import React from "react";
import { Typography } from "antd";

// Components
import NavBar from "../../Components/NavBar/NavBar";

// styles
import "./LocalTestingPage.scss";

function LocalTestingPage() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="page"></div>
      </div>
    </>
  );
}

export default LocalTestingPage;
