import React from 'react';

import auth from './auth'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class ConnectNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        var links = ['online', 'computer'];
        if (auth.loggedIn()) {
            links.push('profile');
            links.push('logout');
        } else {
            links.push('login');
        }

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'>
                            <a>connect</a>
                        </LinkContainer>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    {links.map((link, i) => {
                        return (
                            <LinkContainer to={'/' + link + '/'}>
                                <NavItem eventKey={i}>{link}</NavItem>
                            </LinkContainer>
                        );
                    })}
                </Nav>
            </Navbar>
        );
    }
}

export default ConnectNav;