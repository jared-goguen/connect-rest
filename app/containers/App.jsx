import React from 'react';
import ReactDOM  from 'react-dom';

import AppContainer from './AppContainer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import connectApp from '../reducers';
import * as actions from '../actions';

import utility from '../js/utility';

const store = createStore(connectApp);

const routeActions = [
    (location, history) => {store.dispatch(actions.CLEAR_MODALS())},
    (location, history) => {store.dispatch(actions.SET_ACTIVE(utility.basePath(location.pathname)))},
    (location, history) => {console.log(store.getState())},
];

const App = () => (
    <Provider store={store}>
        <AppContainer routeActions={routeActions}/>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));