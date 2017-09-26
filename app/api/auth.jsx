import axios from './axios-default';

import * as actions from '../actions';

module.exports = {
    login: function(data, dispatch) {
        if (this.loggedIn()) {
            dispatch(actions.ADD_MODAL(true, 'already logged in'));
        }
        this.getToken(data, dispatch);
    },        
    
    logout: function(dispatch) {
        delete localStorage.token
        delete axios.defaults.headers.common['Authorization'];
        dispatch(actions.LOGOUT());
        dispatch(actions.ADD_MODAL(true, 'successfully logged out'));
    },

    loggedIn: function() {
        return !!localStorage.token
    },

    getToken: function(data, dispatch) {
        // https://github.com/mzabriskie/axios/issues/382
        delete axios.defaults.headers.common['Authorization'];

        axios.post('/api/obtain-auth-token/', data).then(response => {
            localStorage.token = response.data.token;
            axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.token;
            dispatch(actions.LOGIN());
            dispatch(actions.ADD_MODAL(true, 'successfully logged in'));
        }).catch(error => {
            dispatch(actions.ADD_MODAL(false, 'invalid credentials'));
        });
    }, 

    register: function(data, dispatch) {
        axios.post('/api/users/', data).then(response => {
            this.login(data, dispatch);
        }).catch(error => {
            dispatch(actions.ADD_MODAL(false, 'unable to register'));
        });
    }
};