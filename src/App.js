import "./App.css";
import React from "react";
import {
  Button,
  Row,
  Col,
  Typography,
  Layout,
  Divider,
  Form,
  Input,
  Checkbox,
} from "antd";
const { Title, Paragraph, Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const GridDemo = () => (
  <>
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
);

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormDemo = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const App = () => (
  <>
    <Layout>
      <Header>
        <Title>Button Demo</Title>
      </Header>
      <Content>
        <Button type="primary">Button</Button>
      </Content>
    </Layout>

    <Layout>
      <Header>
        <Title>Grid Demo</Title>
      </Header>
      <Content>
        <GridDemo />
      </Content>
    </Layout>

    <Layout>
      <Header>
        <Title>Form Demo</Title>
      </Header>
      <Content>
        <FormDemo />
      </Content>
    </Layout>
  </>
);

export default App;
