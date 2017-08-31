import '../css/Login.css';

import React from 'react';

import Login from './Login';
import Register from './Register';
import { Button } from 'react-bootstrap';


class LoginContainer extends React.Component {
    /*
    props
        initialLoginState: string{'login', 'register'}
    state
        isLogin: bool
    */
    constructor(props) {
        super(props);

        this.state = {
            isLogin: !(this.props.initialState === 'register')
        }
    }

    handleClick = (event) => {
        this.setState({isLogin: !this.state.isLogin});
    }

    render() {
        var alt = (this.state.isLogin ? 'register' : 'login') + ' instead';
        var component = this.state.isLogin ? (
            <Login altCallback={this.handleClick} altText={alt} {...this.props} /> 
        ) : (
            <Register altCallback={this.handleClick} altText={alt} {...this.props} /> 
        );
        return component
    }
}

export default LoginContainer;