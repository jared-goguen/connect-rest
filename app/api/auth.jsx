import axios from './axios-default';
import { store } from '../containers/App';
import * as actions from '../actions';

module.exports = {
    loggedIn: function() {
        return !!localStorage.token
    },
    
    login: function(data, onSuccess, onError) {      
        // https://github.com/mzabriskie/axios/issues/382
        delete axios.defaults.headers.common['Authorization'];

        axios.post('/api/obtain-auth-token/', data).then(response => {
            localStorage.token = response.data.token;
            axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.token;
            store.dispatch(actions.LOGIN());
            onSuccess();
        }).catch(error => {
            onError(error.response.data)
        });
    },        
    
    logout: function() {
        delete localStorage.token
        delete axios.defaults.headers.common['Authorization'];
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