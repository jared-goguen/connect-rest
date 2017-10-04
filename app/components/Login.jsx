import React from 'react'
import { Form, Container } from 'semantic-ui-react'
import { LabeledInput } from './Generics'


export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <h3>enter your credentials</h3>
                <Form onSubmit={this.props.submit}>
                    <LabeledInput 
                        label='username'
                        name='username'
                        placeholder='username'
                        change={this.props.change}
                    />
                    <LabeledInput 
                        label='password'
                        name='password'
                        placeholder='password'
                        type='password'
                        change={this.props.change}
                    />
                    <Form.Button>login</Form.Button>
                </Form>
            </Container>
        )
    }
}