import '../css/ConnectNav.css';

import React from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import RouterLink from '../components/RouterLink';

import { connect } from 'react-redux';

import auth from '../api/auth';

var mapStateToProps = (state) => {
    return {
        login: state.login,
        active: state.navbar.active
    }
}

class ConnectNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var Link = (i, link, text, active) => {
            var activeClass = (active === text) ? 'navActive' : 'navInactive';
            return <RouterLink className={activeClass} key={i} eventKey={i} to={link}>{text}</RouterLink>
        };

        var active = this.props.active;

        var links = [
            Link(1, '/', 'home', active),
            Link(2, '/games/', 'games', active), 
            Link(3, '/computer/', 'computer', active)
        ];
        if (this.props.login) {
            links.push(Link(4, '/profile/', 'profile', active));
            links.push(
                <NavItem key={5} eventKey={5} onClick={(event) => {
                    auth.logout(this.props.dispatch);
                }}>logout</NavItem>
            );
        } else {
            links.push(Link(4, '/login/', 'login', active));
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

export default connect(mapStateToProps)(ConnectNav);