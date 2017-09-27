import '../css/Modal.css';

import React from 'react';

import { Alert } from 'react-bootstrap';


class ModalSpan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alertVisible: true
        }
        this.alert_style = this.props.success ? 'success' : 'danger'
    }

    handleAlertDismiss = () => {
        this.setState({alertVisible: false});
        this.props.callback();
    }

    render() {
        if (this.state.alertVisible) {
            return (
                <Alert bsStyle={this.alert_style} onDismiss={this.handleAlertDismiss}>
                    <p>{this.props.text}</p>
                </Alert>
            );
        } else {
            return null;
        }
    }


}

export default ModalSpan;