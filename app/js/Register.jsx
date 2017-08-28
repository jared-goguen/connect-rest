import React from 'react';
import axios from 'axios';

import { HintTextField } from './Generics.jsx'
import RaisedButton from 'material-ui/RaisedButton';

import auth from './auth.jsx'


class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/users/', 
            this.state
        ).then(response => {
            var login_response = auth.login(this.state.username, this.state.password);
            
        });
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
                    name='email'
                    type='email'
                    onChange={this.handleInputChange}
                />
                <br/>
                <HintTextField
                    name='password'
                    type = 'password'
                    onChange={this.handleInputChange}
                />
                <br/>
                <RaisedButton 
                    label='Register' 
                    primary={true}
                    type='submit'
                    className='auth-button' 
                />
            </form>
        );
    }
}

export default Register;