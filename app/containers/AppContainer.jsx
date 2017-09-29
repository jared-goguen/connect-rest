import '../css/App.css';

import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavDrawerContainer from './NavDrawerContainer';
import Index from '../components/Index';
import AIBoardContainer from './AIBoardContainer';
import RegisterContainer from './RegisterContainer';
import LoginContainer from './LoginContainer';
import LogoutContainer from './LogoutContainer';
import ModalContainer from './ModalContainer';
import GamesRouter from './GamesRouter';
import RouteChange from './RouteChange';

import { connect } from 'react-redux';

import constants from '../js/constants';

const appStyle = {
    position: 'absolute',
    height: '100vh',
    left: 0,
    right: 0,
    transition: 'left 0.75s'
};

const mapStateToProps = (state) => {
    return {
        open: state.navbar.open
    };
};

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = {...appStyle, left: this.props.open ? constants.navWidth : 0};

        return (
            <BrowserRouter>              
                <div style={style}>
                    <NavDrawerContainer />
                    <ModalContainer />
                    <RouteChange actions={this.props.routeActions} />
                    <Switch>
                        <Route exact path='/' component={Index} />
                        <Route path='/games/' component={GamesRouter} />
                        <Route path='/computer/' component={AIBoardContainer} />
                        <Route path='/register/' component={RegisterContainer} />
                        <Route path='/login/' component={LoginContainer} />
                        <Route path='/logout/' component={LogoutContainer} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
};

export default connect(mapStateToProps)(AppContainer);