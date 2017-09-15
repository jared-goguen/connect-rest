import '../css/Games.css';

import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import GamesIndex from '../components/GamesIndex';
import GamesCreate from '../components/GamesCreate';
import GameDetail from './GameDetail';

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
                    <Route path='/games/:id/' component={GameDetail} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default GamesRouter;