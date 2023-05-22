import React from 'react';
import { Button, Col, Form, Input, Row } from 'antd';

const LoginForm = ({ onLogin }) => {

    const handleSubmit = (values) => {
    const {email, password}=values
    onLogin(email, password,);
  };

  return (
    <Row justify="center">
        <Col xs={18} sm={16} md={10}>
            <Form
                onFinish={handleSubmit}
                // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                            type:"email"
                        },
                    ]}
                    >
                    <Input placeholder="Email"/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Login
                </Button>
        </Form>
        </Col>
    </Row>
  );
};

export default LoginForm;
