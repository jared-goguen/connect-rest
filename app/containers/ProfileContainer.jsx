import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        username: state.user.username,
    };
}


class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>{this.props.username}'s profile</p>;
    }
}


export default connect(mapStateToProps)(ProfileContainer);