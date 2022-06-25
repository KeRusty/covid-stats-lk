import React from "react";
import { Typography } from "antd";

// styles
import "./Heading.scss";

function Heading({ text, level }: { text?: string; level?: any }) {
  const { Title } = Typography;

  return <Title level={level ?? 1}>{text ?? "PlaceHolder"}</Title>;
}

export default Heading;
