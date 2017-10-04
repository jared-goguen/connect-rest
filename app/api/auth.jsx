import axios from './axios-default';

import * as actions from '../actions';

module.exports = {
    loggedIn: function() {
        return !!localStorage.token
    },
    
    login: function(data, dispatch, history) {
        dispatch(actions.CLEAR_MODALS())
        if (this.loggedIn()) {
            dispatch(actions.ADD_MODAL('warning', 'already logged in'));
        }
        
        // https://github.com/mzabriskie/axios/issues/382
        delete axios.defaults.headers.common['Authorization'];

        axios.post('/api/obtain-auth-token/', data).then(response => {
            localStorage.token = response.data.token;
            axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.token;
            dispatch(actions.LOGIN());
            history.goBack();
        }).catch(error => {
            dispatch(actions.ADD_MODAL('negative', 'invalid credentials'));
        });
    },        
    
    logout: function(dispatch) {
        dispatch(actions.CLEAR_MODALS())
        delete localStorage.token
        delete axios.defaults.headers.common['Authorization'];
        dispatch(actions.LOGOUT());
        dispatch(actions.ADD_MODAL('positive', 'successfully logged out'));
    },

    register: function(data, dispatch) {
        dispatch(actions.CLEAR_MODALS())
        axios.post('/api/users/', data).then(response => {
            this.login(data, dispatch);
        }).catch(error => {
            dispatch(actions.ADD_MODAL('negative', 'unable to register'));
        });
    }
};