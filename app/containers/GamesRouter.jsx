import '../css/Games.css';

import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import GamesIndex from '../components/GamesIndex';
import GamesCreate from '../components/GamesCreate';

import auth from '../api/auth'



class GamesRouter extends React.Component {
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

export default GamesRouter;