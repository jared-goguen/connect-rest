import React from 'react';
import auth from '../api/auth'
import Register from '../components/Register'
import { withRouter } from 'react-router';
import * as utility from '../js/utility';

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            verify: '',
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

        if (this.state.email.length === 0) {
            errors.email = 'This field may not be blank.';
        }

        if (this.state.password.length === 0) {
            errors.password = 'This field may not be blank.';
        }

        if (this.state.password !== this.state.verify) {
            errors.verify = 'Your passwords do not match.';
        }

        return errors;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let errors = this.validateForm();
        if (utility.isEmptyObject(errors)) {
            auth.register(this.state, this.handleSuccess, this.handleError);
        } else {
            this.setState({errors});
        }
    }

    render() {
        return <Register 
            onSubmit={this.handleSubmit} 
            onChange={this.handleChange} 
            errors={this.state.errors}
        />;
    }
}

export default withRouter(RegisterContainer);