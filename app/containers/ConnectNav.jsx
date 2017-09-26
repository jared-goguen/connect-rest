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
        console.log(this.props)
        var Link = (i, link) => (
            <LinkContainer key={i} to={'/' + link + '/'}>
                <NavItem eventKey={i}>{link}</NavItem>
            </LinkContainer>
        );

        var links = [Link(0, 'games'), Link(1, 'computer')];
        if (this.props.login) {
            links.push(Link(2, 'profile'));
            links.push(
                <NavItem key={3} eventKey={3} onClick={(event) => {
                    auth.logout(this.props.dispatch);
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

export default connect(mapStateToProps)(ConnectNav)