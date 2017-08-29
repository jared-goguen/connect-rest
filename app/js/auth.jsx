import axios from './axios-default';

module.exports = {
    login: function(username, password, callback) {
        if (this.loggedIn()) {
            callback({
                success: true,
                message: 'Already logged in'
            });
        }
        this.getToken(username, password, callback);
    },        
    
    logout: function(callback) {
        delete localStorage.token
        delete axios.defaults.headers.common['Authorization'];
        callback();
    },

    loggedIn: function() {
        return !!localStorage.token
    },

    getToken: function(username, password, callback) {
        // https://github.com/mzabriskie/axios/issues/382
        delete axios.defaults.headers.common['Authorization'];

        axios.post('/api/obtain-auth-token/', {
            username: username,
            password: password
        }).then(result => {
            localStorage.token = result.data.token;
            axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.token; 
            callback({
                success: true,
                message: 'Login successful'
            });
        }).catch(error => {
            callback({
                success: false,
                message: 'Invalid credentials'
            });
        });   
    }, 

    register: function(username, password, email, callback) {
        axios.post('/api/users/', {
            username: username,
            password: password,
            email: email
        }).then(response => {
            console.log(response);
            this.login(username, password, callback);
        }).catch(error => {
            callback({
                success: false,
                message: 'Unable to register'
            });
        });
    }
}