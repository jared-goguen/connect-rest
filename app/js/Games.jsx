import '../css/Games.css';

import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import auth from './auth'

import GamesIndex from './GamesIndex';
import GamesCreate from './GamesCreate';

class Games extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/games/' component={GamesIndex} />
                    <Route path='/games/create/' component={GamesCreate} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Games;