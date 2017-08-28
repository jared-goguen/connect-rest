import React from 'react';
import axios from './axios-default.jsx';

import { HintTextField } from './Generics.jsx'
import RaisedButton from 'material-ui/RaisedButton';

import auth from './auth.jsx'


class Login extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        var response = auth.login(this.state.username, this.state.password);
        console.log(response);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <HintTextField
                    name='username'
                    onChange={this.handleInputChange}
                />
                <br/>
                <HintTextField
                    name='password'
                    type='password'
                    onChange={this.handleInputChange}
                />
                <br/>
                <RaisedButton 
                    label='Login' 
                    primary={true} 
                    type='submit'
                    className='auth-button'
                />
            </form>
        );
    }
}

export default Login;