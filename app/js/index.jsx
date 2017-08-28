import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ConnectNav from './ConnectNav';
import App from './App';
import LoginContainer from './LoginContainer';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <ConnectNav />
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/computer' component={App} />
                <Route path='/login/' component={LoginContainer} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('app')
);