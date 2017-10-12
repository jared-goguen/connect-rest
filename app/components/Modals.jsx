import React from 'react';
import { Message, Container } from 'semantic-ui-react'

const modalStyle = {
    marginBottom: 10,
    maxWidth: 500
}

export default class Modals extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                {this.props.messages.map((message, index) => 
                    <Message
                        key={index}
                        style={modalStyle}
                        {...{[message.status]: true}}
                        onDismiss={this.props.partialCallback(message)}
                        content={message.text}
                    />
                )}
            </Container>
        )
    }
}