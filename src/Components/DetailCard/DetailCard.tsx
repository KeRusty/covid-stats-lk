import React from "react";
import { Card } from "antd";

// styles
import "./DetailCard.scss";

function DetailCard({
  title,
  firstRow,
  secondRow,
}: {
  title?: string;
  firstRow?: string;
  secondRow?: string;
}) {
  return (
    <div>
      <Card title={title} bordered={true} className="Card">
        <p>{firstRow}</p>
        <p>{secondRow}</p>
      </Card>
    </div>
  );
}

export default DetailCard;
