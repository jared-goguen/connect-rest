import React from 'react';
import auth from '../api/auth'
import Login from '../components/Login'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class LoginContainer extends React.Component {
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
        return <Login submit={this.handleSubmit} change={this.handleChange} />;
    }
}

export default connect()(withRouter(LoginContainer));