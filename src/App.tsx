import React from "react";
import { Layout } from "antd";
import UsersPage from "./pages/UserPage";

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <h1 style={{ color: "Black", textAlign: "center" }}>User Search</h1>
      <Content style={{ padding: "20px" }}>
        <UsersPage />
      </Content>
    </Layout>
  );
};

export default App;
