import '../css/App.css';

import React from 'react';
import ReactDOM  from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ConnectNav from './ConnectNav';
import Index from '../components/Index';
import AIBoardContainer from './AIBoardContainer';
import LoginContainer from './LoginContainer';
import GamesRouter from './GamesRouter';

import auth from '../api/auth';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import connectApp from '../reducers'

var store = createStore(connectApp);

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loggedIn: auth.loggedIn()
        }
    }

    updateLogin = () => {
        this.setState({loggedIn: auth.loggedIn()});
    }

    render() {
        var DefaultAIBoardContainer = (props) => {
            return (
                <AIBoardContainer rows={6} cols={7} {...props} />
            );
        }

        var BoundLoginContainer = (props) => {
            return (
                <LoginContainer callback={this.updateLogin} {...props} />
            );
        }

        return (
            <Provider store={store} >
                <BrowserRouter>
                    <div className='header-nightsky'>
                        <ConnectNav loggedIn={this.state.loggedIn} callback={this.updateLogin} />
                        <Switch>
                            <Route exact path='/' component={Index} />
                            <Route path='/games/' component={GamesRouter} />
                            <Route path='/computer/' component={DefaultAIBoardContainer} />
                            <Route path='/login/' component={BoundLoginContainer} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));