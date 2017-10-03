import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM  from 'react-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
	<MuiThemeProvider>
	    <Provider store={store}>
	        <AppContainer routeActions={routeActions}/>
	    </Provider>
	</MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));