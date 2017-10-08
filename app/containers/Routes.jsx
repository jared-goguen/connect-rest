import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../components/Index';
import GamesIndex from '../components/GamesIndex';
import GamesCreateContainer from '../containers/GamesCreateContainer';
import GameDetail from './GameDetail';
import AIBoardContainer from './AIBoardContainer';
import RegisterContainer from './RegisterContainer';
import LoginContainer from './LoginContainer';
import LogoutContainer from './LogoutContainer';

import auth from '../api/auth'



export default class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index} />
                <Route exact path='/games/' component={GamesIndex} />
                <Route path='/games/create/' component={GamesCreateContainer} />
                <Route path='/games/:id/' component={GameDetail} />
                <Route exact path='/computer/' component={AIBoardContainer} />
                <Route exact path='/register/' component={RegisterContainer} />
                <Route exact path='/login/' component={LoginContainer} />
                <Route exact path='/logout/' component={LogoutContainer} />
            </Switch>
        );
    }
}