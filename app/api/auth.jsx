import axios from './axios-default';
import { store } from '../containers/App';
import * as actions from '../actions';

module.exports = {

    logoutUpkeep: function() {
        delete localStorage.token;
        delete localStorage.username;
        delete axios.defaults.headers.common['Authorization'];
    },

    loggedIn: function() {
        return !!localStorage.token
    },

    userState: function() {
        return {loggedIn: this.loggedIn(), username: localStorage.username}
    },
    
    login: function(data, onSuccess, onError) {      
        // https://github.com/mzabriskie/axios/issues/382
        delete axios.defaults.headers.common['Authorization'];

        axios.post('/api/obtain-auth-token/', data).then(response => {
            localStorage.token = response.data.token;
            axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.token;
            localStorage.username = data['username']
            store.dispatch(actions.LOGIN(data['username']));
            onSuccess();
        }).catch(error => {
            onError(error.response.data)
        });
    },        
    
    logout: function() {
        this.logoutUpkeep();
        store.dispatch(actions.LOGOUT());
    },

    register: function(data, onSuccess, onError) {
        axios.post('/api/users/', data).then(response => {
            this.login(data, onSuccess, onError);
        }).catch(error => {
            onError(error.response.data)
        });
    }
};