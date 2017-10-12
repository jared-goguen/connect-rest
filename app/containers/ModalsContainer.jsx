import React from 'react';
import Modals from '../components/Modals';
import { connect } from 'react-redux';
import * as actions from '../actions';

var mapStateToProps = (state) => {
    return {
        messages: state.modal
    }
}

class ModalsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    partialCallback = (message) => {
        return () => this.props.dispatch(actions.REMOVE_MODAL(message));
    }

    render() {
        return (
            <Modals 
                partialCallback={this.partialCallback}
                messages={this.props.messages} 
            />
        );
    }
}

export default connect(mapStateToProps)(ModalsContainer);