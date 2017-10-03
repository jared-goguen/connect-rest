import React from 'react'
import { Form } from 'semantic-ui-react'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form onSubmit={this.props.submit}>
                <Form.Input inline required placeholder='username' onChange={this.props.change} />
                <Form.Input inline required placeholder='username' type='password' onChange={this.props.change} />
                <Form.Button>Login</Form.Button>
            </Form>
        )
    }
}