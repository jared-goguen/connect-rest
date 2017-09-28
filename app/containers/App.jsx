import '../css/App.css';

import React from 'react';
import ReactDOM  from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Index from '../components/Index';
import AIBoardContainer from './AIBoardContainer';
import LoginContainer from './LoginContainer';
import ModalContainer from './ModalContainer';
import GamesRouter from './GamesRouter';
import RouteChange from './RouteChange';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import connectApp from '../reducers';
import * as actions from '../actions';

import utility from '../js/utility';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavDrawerContainer from './NavDrawerContainer';





const store = createStore(connectApp);

const routeActions = [
    (location, history) => {store.dispatch(actions.CLEAR_MODALS())},
    (location, history) => {store.dispatch(actions.SET_ACTIVE(utility.basePath(location.pathname)))},
];

const routes = (
    <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/games/' component={GamesRouter} />
        <Route path='/computer/' component={AIBoardContainer} />
        <Route path='/login/' component={LoginContainer} />
    </Switch>
);

const App = () => (
    <MuiThemeProvider>
        <Provider store={store} >
            <BrowserRouter>
                <div className='App'>
                    <NavDrawerContainer />
                    <ModalContainer />
                    <RouteChange actions={routeActions} />
                    {routes}
                </div>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));