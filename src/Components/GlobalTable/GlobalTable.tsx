import React from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";

// Components

// styles
import "./GlobalTable.scss";

function GlobalTable({ data }: { data: any }) {
  const columns: ColumnsType<any> = [
    {
      key: "ID",
      title: "Country",
      dataIndex: "Country",
      width: "40%",
      sorter: {
        compare: (a, b) => a.Country - b.Country,
      },
    },
    {
      key: "ID",
      title: "Total Confirmed",
      dataIndex: "TotalConfirmed",
      width: "40%",
      render: (text: string, record: any) => <p>{text.toLocaleString()}</p>,
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      key: "ID",
      title: "Total Deaths",
      dataIndex: "TotalDeaths",
      width: "40%",
      render: (text: string, record: any) => <p>{text.toLocaleString()}</p>,
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
  ];

  const onChange: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table
      className="this-table"
      columns={columns}
      dataSource={data}
      onChange={onChange}
      size={"large"}
    />
  );
}

export default GlobalTable;
