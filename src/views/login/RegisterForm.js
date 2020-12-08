import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React, { Component, Fragment } from 'react';
import './index.less';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onFinish = (values) => {
        
        this.props.onFinish(values);
        console.log('Re ', values);
    };

    render() {
        return (
            <Fragment>
                <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={this.onFinish}>
                    <Form.Item name='username' rules={[{ required: true, message: 'Please input your Username!' }]}>
                        <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
                    </Form.Item>
                    <Form.Item name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
                        <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
                    </Form.Item>
                    <Form.Item name='Code' rules={[{ required: true, message: 'Please input your Code!' }]}>
                        <Row gutter={13}>
                            <Col span={15}>
                                <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Code11111' />
                            </Col>
                            <Col span={9}>
                                <Button type='danger' block>
                                    获取验证码
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit' className='login-form-button' block>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}

export default RegisterForm;
