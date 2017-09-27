import '../css/ConnectNav.css';

import React from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';

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

        var links = [
            <NavItem key={1} eventKey={1} onClick={ e => this.props.history.push('/') }>
                home
            </NavItem>,
            <NavItem key={2} eventKey={2} onClick={ e => this.props.history.push('/games/') }>
                games
            </NavItem>,
            <NavItem key={3} eventKey={3} onClick={ e => this.props.history.push('/computer/') }>
                computer
            </NavItem>
        ];

        if (this.props.login) {
            links.push(
                <NavItem key={4} eventKey={4} onClick={ e => this.props.history.push('/profile/') }>
                    computer
                </NavItem>
            );
            links.push(
                <NavItem key={5} eventKey={5} onClick={ e => auth.logout(this.props.dispatch) } >
                    logout
                </NavItem>
            );
        } else {
            links.push(
                <NavItem key={4} eventKey={4} onClick={ e => this.props.history.push('/login/') } >
                    login
                </NavItem>
            );
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

export default connect(mapStateToProps)(withRouter(ConnectNav))