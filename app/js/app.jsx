import '../css/App.css';

import React from 'react';
import ReactDOM  from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import auth from './auth'

import ConnectNav from './ConnectNav';
import Index from './Index';
import BoardContainer from './BoardContainer';
import LoginContainer from './LoginContainer';
import Games from './Games';


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
        var DefaultBoardContainer = (props) => {
            return (
                <BoardContainer rows={6} cols={7} {...props} />
            );
        }

        var BoundLoginContainer = (props) => {
            return (
                <LoginContainer callback={this.updateLogin} {...props} />
            );
        }

        return (
            <BrowserRouter>
                <div className='header-nightsky'>
                    <ConnectNav loggedIn={this.state.loggedIn} callback={this.updateLogin} />
                    <Switch>
                        <Route exact path='/' component={Index} />
                        <Route path='/games/' component={Games} />
                        <Route path='/computer/' component={DefaultBoardContainer} />
                        <Route path='/login/' component={BoundLoginContainer} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));