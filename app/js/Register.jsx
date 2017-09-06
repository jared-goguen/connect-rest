import '../css/Forms.css';

import React from 'react';
import auth from './auth'

import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';



class Register extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            email: '',
            password: '',
            verify: ''
        };
    }

    validateForm = () => {
        return this.state.username.length > 0
            && this.state.password.length > 0
            && (this.state.password == this.state.verify);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        auth.register(this.state.username, this.state.password, this.state.email, (response) => {
            this.props.callback();
            if (response.success) {
                this.props.history.goBack();
            }
        });
    }

    render() {
        return (
            <div className='Bsaic'>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId='username' bsSize='large'>
                        <ControlLabel>username</ControlLabel>
                        <FormControl
                            autoFocus
                            type='username'
                            value={this.state.username}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId='email' bsSize='large'>
                        <ControlLabel>email</ControlLabel>
                        <FormControl
                            autoFocus
                            type='email'
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId='password' bsSize='large'>
                        <ControlLabel>password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type='password' />
                    </FormGroup>
                    <FormGroup controlId='verify' bsSize='large'>
                        <ControlLabel>verify password</ControlLabel>
                        <FormControl
                            value={this.state.verify}
                            onChange={this.handleChange}
                            type='password' />
                    </FormGroup>
                    <Button
                        bsSize='large'
                        className='mainButton'
                        disabled={ !this.validateForm() }
                        type='submit'>
                        register
                    </Button>
                    <br/>
                    <Button 
                        bsSize='large' 
                        className='altButton'
                        onClick={this.props.altCallback}>
                        {this.props.altText}
                    </Button>
                </form>
            </div>
        );
    }
}

export default Register;