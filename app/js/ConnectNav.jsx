import '../css/ConnectNav.css';

import React from 'react';

import auth from './auth'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class ConnectNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var Link = (i, link) => (
            <LinkContainer key={i} to={'/' + link + '/'}>
                <NavItem eventKey={i}>{link}</NavItem>
            </LinkContainer>
        );

        var links = [Link(0, 'humans'), Link(1, 'computer')];
        if (this.props.loggedIn) {
            links.push(Link(2, 'profile'));
            links.push(
                <NavItem key={3} eventKey={3} onClick={(event) => {
                    auth.logout(this.props.callback);
                }}>logout</NavItem>
            );
        } else {
            links.push(Link(2, 'login'));
        }

        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <LinkContainer to='/'>
                                <a>connect</a>
                            </LinkContainer>
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

export default ConnectNav;