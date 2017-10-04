import React from 'react';
import { Message } from 'semantic-ui-react'

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.status = {
            [this.props.status]: true
        };
    }

    render() {
        return (
            <Message
                {...this.status}
                onDismiss={this.props.callback}
                content={this.props.text}
            />
        )
    }
}