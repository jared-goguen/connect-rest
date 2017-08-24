import React from 'react';
import axios from 'axios';
import { getCookie } from './utility';
import DjangoCSRFToken from 'django-react-csrftoken'

import { HintTextField } from './Generics.jsx'
import RaisedButton from 'material-ui/RaisedButton';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('/api/login', this.state
        ).then(response => {
            console.log(response);
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/*<DjangoCSRFToken/>*/}
                <HintTextField
                    name='username'
                    onChange={this.handleInputChange}
                />
                <br/>
                <HintTextField
                    name='password'
                    type='password'
                    onChange={this.handleInputChange}
                />
                <br/>
                <RaisedButton 
                    label='Login' 
                    primary={true} 
                    type='submit'
                    className='auth-button'
                />
            </form>
        );
    }
}

export default Login;