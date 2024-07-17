import React from "react";
import { Form, Input, Button } from "antd";

interface SearchFormProps {
  onFinish: (values: { email: string; number?: string }) => void;
  loading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onFinish, loading }) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ width: "50%", background: "blue", borderRadius: "20px", padding: "20px" }}
    >
      <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please input your email!" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="number" label="Number">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
