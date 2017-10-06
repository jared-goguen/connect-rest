import React from 'react'
import { Form, Container } from 'semantic-ui-react'
import { LabeledInput } from './Generics'


export default class GamesCreate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <h3>create a game</h3>
                <Form onSubmit={this.props.submit}>
                    <LabeledInput 
                        label='title'
                        name='title'
                        placeholder='title'
                        change={this.props.change}
                    />
                    <Form.Button>create</Form.Button>
                </Form>
            </Container>
        )
    }
}