import '../css/Modal.css';

import React from 'react';

import ModalSpan from '../components/ModalSpan';

import { connect } from 'react-redux';

var mapStateToProps = (state) => {
    return {
        messages: state.modal
    }
}

class ModalContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <ul>
                {this.props.messages.map((message, index) => 
                    <li key={index}><ModalSpan {...message} /></li>
                )}
            </ul>
        );
    }
}

export default connect(mapStateToProps)(ModalContainer);