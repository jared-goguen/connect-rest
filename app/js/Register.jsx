import React from 'react';

import auth from './auth'


class Register extends React.Component {
    constructor(props) {
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
        var response = auth.register(this.state.username, this.state.password, this.state.email);
        console.log(response);
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
                <input
                    name='username'
                    onChange={this.handleInputChange}
                />
                <br/>
                <input
                    name='email'
                    type='email'
                    onChange={this.handleInputChange}
                />
                <br/>
                <input
                    name='password'
                    type = 'password'
                    onChange={this.handleInputChange}
                />
                <br/>
                <button type='submit'>register</button>
            </form>
        );
    }
}

export default Register;