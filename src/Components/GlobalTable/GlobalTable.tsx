import React, { useState, useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";

// Components

// styles
import "./GlobalTable.scss";

function GlobalTable({ data }: { data: any }) {
  console.log(data, "TABLE DATA");
  const columns: ColumnsType<any> = [
    {
      title: "Country",
      dataIndex: "Country",
    },
    {
      title: "Total Confirmed",
      dataIndex: "TotalConfirmed",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Total Deaths",
      dataIndex: "TotalDeaths",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
  ];

  const info: any = [
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
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
      columns={columns}
      dataSource={data}
      onChange={onChange}
      size={"large"}
    />
  );
}

export default GlobalTable;
