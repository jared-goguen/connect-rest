import '../css/App.css';

import React from 'react';
import ReactDOM  from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ConnectNav from './ConnectNav';
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

var store = createStore(connectApp);

var DefaultAIBoardContainer = (props) => {
    return (
        <AIBoardContainer rows={6} cols={7} />
    );
}

var routeActions = [
    (location, history) => {store.dispatch(actions.SET_ACTIVE(utility.basePath(location.pathname)))},
    (location, history) => {store.dispatch(actions.CLEAR_MODALS())},
];

var routes = (
    <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/games/' component={GamesRouter} />
        <Route path='/computer/' component={DefaultAIBoardContainer} />
        <Route path='/login/' component={LoginContainer} />
    </Switch>
);


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store} >
                <BrowserRouter>
                    <div className='App'>
                        <ConnectNav />
                        <ModalContainer />
                        <RouteChange actions={routeActions} />
                        {routes}
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));