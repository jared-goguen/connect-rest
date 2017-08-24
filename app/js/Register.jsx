import React from 'react';
import axios from 'axios';

import { HintTextField } from './Generics.jsx'
import RaisedButton from 'material-ui/RaisedButton';


class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.partialOnChange = this.partialOnChange.bind(this);
    }

    handleClick(event) {
        axios.post('/api/users/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
    }

    partialOnChange(attribute) {
        return (event, value) => this.setState({attribute: value});
    }

    render() {
        return (
            <div>
                <HintTextField
                    hintTitle='username'
                    onChange={this.partialOnChange('username')}
                />
                <br/>
                <HintTextField
                    hintTitle='email'
                    type='email'
                    onChange={this.partialOnChange('email')}
                />
                <br/>
                <HintTextField
                    hintTitle='password'
                    type = 'password'
                    onChange={this.partialOnChange('password')}
                />
                <br/>
                <RaisedButton 
                    label='Register' 
                    primary={true} 
                    className='auth-button' 
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default Register;