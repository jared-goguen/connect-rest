import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavDrawer from '../components/NavDrawer';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        login: state.login,
        active: state.navbar.active,
        open: state.navbar.open
    };
}

class NavDrawerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleToggle = () => {
        this.props.dispatch(actions.TOGGLE_OPEN());
    }

    addActive = (itemList) => {
        return itemList.map((item, index) => (
            {...item, active: item.name == this.props.active}
        ));
    }

    addClick = (itemList) => {
        return itemList.map((item, index) => (
            {...item, click: () => this.props.history.push(item.path)}
        ));
    }

    render() {
        let navItems = [
            {path: '/', name: 'home'},
            {path: '/games/', name: 'games'},
            {path: '/computer/', name: 'computer'},
        ];
        navItems = this.addActive(navItems);
        navItems = this.addClick(navItems);

        let loginItems;
        if (this.props.login) {
            loginItems = [
                {path: '/profile/', name: 'profile'},
                {path: '/logout/', name: 'logout'}
            ];
        } else {
            loginItems = [
                {path: '/login/', name: 'login'},
                {path: '/register/', name: 'register'}
            ];
        }
        loginItems = this.addActive(loginItems);
        loginItems = this.addClick(loginItems);

        return <NavDrawer 
            open={this.props.open} 
            handleToggle={this.handleToggle}
            navItems={navItems} 
            loginItems={loginItems} 
        />;
    }
}

export default connect(mapStateToProps)(withRouter(NavDrawerContainer));