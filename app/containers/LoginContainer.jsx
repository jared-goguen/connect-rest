import React from 'react';
import auth from '../api/auth'
import Login from '../components/Login'
import { withRouter } from 'react-router';
import * as utility from '../js/utility';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {}
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSuccess = () => {
        this.props.history.goBack();
    }

    handleError = (errors) => {
        this.setState({errors});
    }   

    validateForm = () => {
        let errors = {};

        if (this.state.username.length === 0) {
            errors.username = 'This field may not be blank.';
        }

        if (this.state.password.length === 0) {
            errors.password = 'This field may not be blank.';
        }

        return errors;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let errors = this.validateForm();
        if (utility.isEmptyObject(errors)) {
            auth.login(this.state, this.handleSuccess, this.handleError);
        } else {
            this.setState({errors});   
        }
    }

    render() {
        return <Login 
            onSubmit={this.handleSubmit} 
            onChange={this.handleChange} 
            errors={this.state.errors}
        />;
    }
}

export default withRouter(LoginContainer);