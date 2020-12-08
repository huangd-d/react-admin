import React, { Component } from 'react';
import './index.less';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formType: 'Login',
        };
    }
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    setFormType = (value) => {
        console.log(value);
        this.setState({
            formType: value,
        });
    };
    onFinish = (value) => {
        console.log(value, 111);
    };

    render() {
        return (
            <div className='form-wrap'>
                <div className='form-header'>
                    <span className='column' onClick={this.setFormType.bind(this, 'Login')}>
                        登录
                    </span>
                    <span onClick={this.setFormType.bind(this, 'Register')}>账号注册</span>
                </div>
                <div className='form-content'>
                    {this.state.formType === 'Login' ? (
                        <LoginForm onFinish={this.onFinish}></LoginForm>
                    ) : (
                        <RegisterForm onFinish={this.onFinish}></RegisterForm>
                    )}
                </div>
            </div>
        );
    }
}

export default Login;
