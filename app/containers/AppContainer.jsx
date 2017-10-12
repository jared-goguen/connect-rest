import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import NavBarContainer from './NavBarContainer';
import RouteChange from './RouteChange';
import Routes from './Routes';
import ModalsContainer from './ModalsContainer';
import { connect } from 'react-redux';

const appStyle = {
    width: '100vw',
    height: '100vh',
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
                    <ModalsContainer />
                    <RouteChange actions={this.props.routeActions} />
                    <Routes />
                </Container>
            </BrowserRouter>
        );
    }
};

export default connect(mapStateToProps)(AppContainer);