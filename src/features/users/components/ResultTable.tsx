import React from "react";
import { Table } from "antd";

interface ResultsTableProps {
  results: { email: string; number: string }[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
  ];

  return <Table style={{ width: "90%" }} dataSource={results} columns={columns} pagination={false} />;
};

export default ResultsTable;
