import React from "react";
import { Flex } from "antd";
import SearchForm from "../features/users/components/SearchForm";
import ResultsTable from "../features/users/components/ResultTable";
import useUserSearch from "../features/users/hooks/useUserSearch";

const UsersPage: React.FC = () => {
  const { results, loading, handleSearch } = useUserSearch();

  return (
    <div style={{ padding: "20px" }}>
      <Flex vertical align="center" justify="center">
        <SearchForm onFinish={handleSearch} loading={loading} />
      </Flex>
      <Flex vertical align="center" justify="center">
        {results.length > 0 ? <ResultsTable results={results} /> : <h2>Users not found</h2>}
      </Flex>
    </div>
  );
};

export default UsersPage;
