import '../css/Index.css';

import React from 'react';
import { Button } from 'react-bootstrap';

import { connect } from 'react-redux'
import { login, logout } from '../actions';

var login_button = ({dispatch}) => <Button onClick={e => dispatch(login())}>login</Button>
var logout_button = ({dispatch}) => <Button onClick={e => dispatch(logout())}>logout</Button>
var LoginButton = connect()(login_button)
var LogoutButton = connect()(logout_button)



class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>A place for humans to play with other humans (or a mediocre AI).</h2>
                <LoginButton />
                <LogoutButton />
            </div>
        );
    }
}

export default Index;