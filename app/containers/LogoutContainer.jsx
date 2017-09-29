import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import auth from '../api/auth'

class LogoutContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        auth.logout(this.props.dispatch);
        this.props.history.goBack();
    }

    render() {
        return null;
    }
}

export default connect()(withRouter(LogoutContainer));