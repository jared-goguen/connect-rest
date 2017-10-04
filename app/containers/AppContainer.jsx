import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBarContainer from './NavBarContainer';
import Index from '../components/Index';
import AIBoardContainer from './AIBoardContainer';
import RegisterContainer from './RegisterContainer';
import LoginContainer from './LoginContainer';
import LogoutContainer from './LogoutContainer';
import ModalContainer from './ModalContainer';
import GamesRouter from './GamesRouter';
import RouteChange from './RouteChange';
import { Container } from 'semantic-ui-react';

import { connect } from 'react-redux';

const appStyle = {
    width: '100vw',
    height: '100vh',
    padding: 10
};

const mapStateToProps = (state) => Object();

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>              
                <Container style={appStyle}>
                    <NavBarContainer />
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
                </Container>
            </BrowserRouter>
        );
    }
};

export default connect(mapStateToProps)(AppContainer);