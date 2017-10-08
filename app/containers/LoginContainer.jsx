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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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