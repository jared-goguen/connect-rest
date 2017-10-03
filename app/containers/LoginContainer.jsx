import React from 'react';

import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import auth from '../api/auth'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    validateForm = () => {
        return this.state.username.length > 0
            && this.state.password.length > 0;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        auth.login(this.state, this.props.dispatch, this.props.history);
    }

    render() {
        return (
            <div className='Basic'>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId='username' bsSize='large'>
                        <ControlLabel>username</ControlLabel>
                        <FormControl
                            autoFocus
                            type='username'
                            value={this.state.username}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId='password' bsSize='large'>
                        <ControlLabel>password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type='password' />
                    </FormGroup>
                    <Button
                        bsSize='large'
                        className='mainButton'
                        disabled={ !this.validateForm() }
                        type='submit'>
                        login
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

export default connect()(withRouter(Login));