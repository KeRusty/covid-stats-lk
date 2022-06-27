import React from "react";
import { Space, Spin } from "antd";

// styles
import "./Spinner.scss";

function Spinner() {
  return (
    <Space size="middle">
      <Spin size="large" />
    </Space>
  );
}
export default Spinner;
