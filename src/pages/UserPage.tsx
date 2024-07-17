import React, { useState, useRef } from "react";
import SearchForm from "../components/users/SearchForm";
import ResultsTable from "../components/users/ResultTable";
import axios from "axios";
import { Flex, Space } from "antd";

const UsersPage: React.FC = () => {
  const [results, setResults] = useState<{ email: string; number: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const cancelTokenRef = useRef<any>(null);

  const handleSearch = async (values: { email: string; number?: string }) => {
    if (cancelTokenRef.current) {
      cancelTokenRef.current.cancel("Operation canceled due to new request.");
    }

    cancelTokenRef.current = axios.CancelToken.source();
    setLoading(true);

    try {
      const response = await axios.get("http://localhost:3000/users/search", {
        params: values,
        cancelToken: cancelTokenRef.current.token,
      });
      setResults(response.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else {
        console.error("Something went wrong:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Flex vertical align="center" justify="center">
        <SearchForm onFinish={handleSearch} loading={loading} />
      </Flex>
      <Flex vertical align="center" justify="center">
        {results.length > 0 ? <ResultsTable results={results} /> : <h2>Users not faund</h2>}
      </Flex>
    </div>
  );
};

export default UsersPage;
