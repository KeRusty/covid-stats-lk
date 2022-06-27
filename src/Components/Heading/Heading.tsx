import React from "react";
import { Typography } from "antd";

// styles
import "./Heading.scss";

function Heading({
  text,
  level,
  type,
}: {
  text?: string;
  level?: any;
  type?: "global" | "local";
}) {
  const { Title, Link } = Typography;

  return (
    <>
      <Title level={level ?? 1}>{text ?? "PlaceHolder"}</Title>
      <Link
        href={
          type === "global"
            ? "/global-overview"
            : "/sri-lanka-covid-testing-info"
        }
        target="_self"
      >
        Click Me for Detailed Information
      </Link>
    </>
  );
}

export default Heading;
