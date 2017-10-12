import React from 'react'
import { Form, Container, Header, Message } from 'semantic-ui-react'
import { LabeledInput } from './Generics'

export default class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Header as='h3'>sign up here</Header>
                <Form onSubmit={this.props.onSubmit}>
                    <LabeledInput 
                        label='username'
                        name='username'
                        placeholder='username'
                        change={this.props.onChange}
                        error={this.props.errors['username']}
                    />
                    <LabeledInput 
                        label='email'
                        name='email'
                        placeholder='you@example.com'
                        change={this.props.onChange}
                        error={this.props.errors['email']}
                    />
                    <LabeledInput 
                        label='password'
                        name='password'
                        placeholder='password'
                        type='password'
                        change={this.props.onChange}
                        error={this.props.errors['password']}
                    />
                    <LabeledInput 
                        label='verify'
                        name='verify'
                        placeholder='same password'
                        type='password'
                        change={this.props.onChange}
                        error={this.props.errors['verify']}
                    />
                    <Form.Button>register</Form.Button>
                    { this.props.errors['non_field_errors'] ? 
                        <Message color='pink' content={this.props.errors['non_field_errors']} />
                        : null
                    }
                </Form>
            </Container>
        )
    }
}