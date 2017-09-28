import React from 'react';
import { connect } from 'react-redux';
import NavDrawer from '../components/NavDrawer';

const mapStateToProps = (state) => {
    return {
        login: state.login,
        active: state.navbar.active
    };
}

class NavDrawerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    setActive = (itemList) => {
        return itemList.map((item, index) => (
            {...item, active: item.name == this.props.active}
        ));
    }

    render() {
        let navItems = [
            {path: '/', name: 'home'},
            {path: '/games/', name: 'games'},
            {path: '/computer/', name: 'computer'},
        ];
        this.setActive(navItems);

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
        this.setActive(loginItems);

        return <NavDrawer navItems={navItems} loginItems={loginItems} />;
    }
}

export default connect(mapStateToProps)(NavDrawerContainer);