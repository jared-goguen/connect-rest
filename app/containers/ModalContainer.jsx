import '../css/Modal.css';

import React from 'react';

import ModalSpan from '../components/ModalSpan';

import { connect } from 'react-redux';

import * as actions from '../actions';

var mapStateToProps = (state) => {
    return {
        messages: state.modal
    }
}

class ModalContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    partialCallback = (message) => {
        return () => this.props.dispatch(actions.REMOVE_MODAL(message));
    }

    render() {
        return (
            <div>
                {this.props.messages.map((message, index) => 
                    <ModalSpan key={index} callback={this.partialCallback(message)}  {...message}/>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps)(ModalContainer);