import React from 'react';
import { Form, Container, Header, Message } from 'semantic-ui-react';
import { LabeledInput } from './LabeledInput';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Header as='h3'>enter your credentials</Header>
                <Form onSubmit={this.props.onSubmit}>
                    <LabeledInput 
                        label='username'
                        name='username'
                        placeholder='username'
                        change={this.props.onChange}
                        error={this.props.errors['username']}
                    />
                    <LabeledInput 
                        label='password'
                        name='password'
                        placeholder='password'
                        type='password'
                        change={this.props.onChange}
                        error={this.props.errors['password']}
                    />
                    <Form.Button>login</Form.Button>
                    { this.props.errors['non_field_errors'] ? 
                        <Message color='pink' content={this.props.errors['non_field_errors']} />
                        : null
                    }
                </Form>
            </Container>
        )
    }
}