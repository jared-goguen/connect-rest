import '../css/Index.css';

import React from 'react';
import { Button } from 'react-bootstrap';

import { connect } from 'react-redux'
import { login, logout } from '../actions';

var login_button = ({dispatch}) => <Button onClick={e => dispatch(login())}>login</Button>
var logout_button = ({dispatch}) => <Button onClick={e => dispatch(logout())}>logout</Button>
login_button = connect()(login_button)
logout_button = connect()(logout_button)

console.log(logout_button)

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>A place for humans to play with other humans (or a mediocre AI).</h2>
                <login_button />
                <logout_button />
            </div>
        );
    }
}

export default Index;