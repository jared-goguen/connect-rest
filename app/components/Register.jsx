import React from 'react'
import { Form, Container } from 'semantic-ui-react'
import { LabeledInput } from './Generics'

export default class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <h3>sign up here</h3>
                <Form onSubmit={this.props.submit}>
                    <LabeledInput 
                        label='username'
                        name='username'
                        placeholder='username'
                        change={this.props.change}
                    />
                    <LabeledInput 
                        label='email'
                        name='email'
                        placeholder='you@example.com'
                        change={this.props.change}
                    />
                    <LabeledInput 
                        label='password'
                        name='password'
                        placeholder='password'
                        type='password'
                        change={this.props.change}
                    />
                    <LabeledInput 
                        label='verify'
                        name='verify'
                        placeholder='same password'
                        type='password'
                        change={this.props.change}
                    />
                    <Form.Button>register</Form.Button>
                </Form>
            </Container>
        )
    }
}