import '../css/Login.css';

import React from 'react';
import auth from './auth'

import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';



class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.username.length > 0
            && this.state.password.length > 0;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        auth.login(this.state.username, this.state.password, (response) => {
            this.props.callback();
            if (response.success) {
                this.props.history.goBack();
            }
        });
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="username"
                            value={this.state.username}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password" />
                    </FormGroup>
                    <Button
                        bsSize="large"
                        disabled={ !this.validateForm() }
                        type="submit">
                        login
                    </Button>
                    <Button 
                        bsSize="large" 
                        onClick={this.props.altCallback}>
                        {this.props.altText}
                    </Button>
                </form>
            </div>
        );
    }
}

export default Login;