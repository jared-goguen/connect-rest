import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import auth from './auth'

import ConnectNav from './ConnectNav';
import LoginContainer from './LoginContainer';
import BoardContainer from './BoardContainer';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: auth.loggedIn()
        }
        this.updateLogin = this.updateLogin.bind(this);
    }

    updateLogin() {
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
                <div>
                    <ConnectNav loggedIn={this.state.loggedIn} callback={this.updateLogin} />
                    <Switch>
                        <Route path='/computer' component={DefaultBoardContainer} />
                        <Route path='/login/' component={BoundLoginContainer} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;