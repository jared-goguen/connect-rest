import React from 'react';
import 'whatwg-fetch';

import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login.jsx';
import Register from './Register.jsx';


class LoginContainer extends React.Component {
    /*
    props
        initialLoginState: string{'login', 'register'}
    state
        isLogin: bool
    */
    constructor(props){
        super(props);
        this.state = {
            isLogin: !(this.props.initialState === 'register')
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.setState({isLogin: !this.state.isLogin});
    }

    render() {
        var component = this.state.isLogin ? <Login/> : <Register/>;
        var alt = (this.state.isLogin ? 'Register' : 'Login') + ' Instead';

        return (
            <div>
                {component}
                <RaisedButton 
                    label={alt} 
                    primary={true}
                    className='auth-button' 
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default LoginContainer;