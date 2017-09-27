import '../css/ConnectNav.css';

import React from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { connect } from 'react-redux';

import auth from '../api/auth';

var mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

class ConnectNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var Link = (i, link, text) => (
            <LinkContainer exact to={link}>
                <NavItem>{text}</NavItem>
            </LinkContainer>
        );

        var links = [
            Link(0, '/', 'home'),
            Link(1, '/games/', 'games'), 
            Link(2, '/computer/', 'computer')
        ];
        if (this.props.login) {
            links.push(Link(3, '/profile/', 'profile'));
            links.push(
                <NavItem key={4} onClick={(event) => {
                    auth.logout(this.props.dispatch);
                }}>logout</NavItem>
            );
        } else {
            links.push(Link(3, '/login/', 'login'));
        }

        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            connect
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        {links}
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ConnectNav)