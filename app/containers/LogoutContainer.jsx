import React from 'react';
import { withRouter } from 'react-router';
import auth from '../api/auth'

class LogoutContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        auth.logout();
        this.props.history.goBack();
    }

    render() {
        return null;
    }
}

export default withRouter(LogoutContainer);