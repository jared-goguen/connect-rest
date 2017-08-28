import axios from './axios-default.jsx';

module.exports = {
    login: function(username, password) {
        if (this.loggedIn()) {
            return {
                success: true,
                message: 'Already logged in'
            }
        }
        return this.getToken(username, password);
    },        
    
    logout: function() {
        delete localStorage.token
        delete axios.defaults.headers.common['Authorization'];
    },

    loggedIn: function() {
        return !!localStorage.token
    },

    getToken: function(username, password, cb) {
        // https://github.com/mzabriskie/axios/issues/382
        delete axios.defaults.headers.common['Authorization'];

        return axios.post('/api/obtain-auth-token/', {
            username: username,
            password: password
        }).then(result => {
            localStorage.token = result.data.token;
            axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.token; 
            return {
                success: true,
                message: 'Login successful'
            }
        }).catch(error => {
            return {
                success: false,
                message: 'Invalid credentials'
            }
        });
    }, 
}