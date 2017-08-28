import React from 'react';
import ReactDOM  from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './app.jsx'
import LoginContainer from './LoginContainer.jsx'
import auth from './auth.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => (
                    !auth.loggedIn() ? (
                        <Redirect to="/login/"/>
                    ) : (
                        <App/>
                    )
                )}/>
                <Route path='/login/' component={LoginContainer} />
            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('app')    
);

