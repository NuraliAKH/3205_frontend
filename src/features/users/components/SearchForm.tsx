import React from "react";
import { Form, Input, Button } from "antd";
import InputMask from "react-input-mask";

interface SearchFormProps {
  onFinish: (values: { email: string; number?: string }) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onFinish }) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ width: "50%", border: "1px solid blue", borderRadius: "20px", padding: "20px" }}
    >
      <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please input your email!" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="number" label="Number">
        <InputMask
          style={{
            width: "100%",
            padding: "4px 11px",
            borderRadius: "6px",
            border: "1px solid #d9d9d9",
            fontSize: "14px",
            lineHeight: "1.5714285714285714",
            color: "rgba(0, 0, 0, 0.85)",
            backgroundColor: "",
            transition: "all 0.2s",
          }}
          mask="99-99-99"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
