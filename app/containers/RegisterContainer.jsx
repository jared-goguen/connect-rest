import React from 'react';
import auth from '../api/auth'
import Register from '../components/Register'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            verify: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        auth.register(this.state, this.props.dispatch, this.props.history);
    }

    render() {
        return <Register submit={this.handleSubmit} change={this.handleChange} />;
    }
}

export default connect()(withRouter(RegisterContainer));