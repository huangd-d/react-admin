import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React, { Component, Fragment } from 'react';
import './index.less';

import { validate_password } from './../../utils/validate';
import { Login, getCode } from './../../api/account';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }
    onFinish = (values) => {
        Login(values)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
        this.props.onFinish(values);
        console.log('Received : ', values);
    };

    getCode = (value) => {
        console.log('');
        getCode({
            username: this.state.username,
            module: 'login'
        }).then(res => {
            console.log(res);
        })
    }

    inputChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={this.onFinish}>
                    <Form.Item name='username' rules={[{ required: true, message: 'Please input your Username!' }]}>
                        <Input value={this.state.username} onChange={this.inputChange} prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[
                            { required: true, message: 'Please input your Password!' },
                            { pattern: validate_password, message: '不能少于6位' },
                        ]}>
                        <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
                    </Form.Item>
                    <Form.Item name='Code' rules={[{ required: true, message: 'Please input your Code!' }]}>
                        <Row gutter={13}>
                            <Col span={15}>
                                <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Code' />
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
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}

export default LoginForm;
