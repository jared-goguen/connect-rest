import React from 'react';

import Login from './Login';
import Register from './Register';

class LoginContainer extends React.Component {
    /*
    props
        initialLoginState: string{'login', 'register'}
    state
        isLogin: bool
    */
    constructor(props) {
        super(props);
        this.state = {
            isLogin: !(this.props.initialState === 'register')
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({isLogin: !this.state.isLogin});
    }

    render() {
        var component = this.state.isLogin ? <Login/> : <Register/>;
        var alt = (this.state.isLogin ? 'register' : 'login') + ' instead';

        return (
            <div>
                {component}
                <button onClick={this.handleClick}>{alt}</button>
            </div>
        );
    }
}

export default LoginContainer;