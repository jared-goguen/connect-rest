import axios from './axios-default';

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

    register: function(username, password, email) {
        axios.post('/api/users/', {
            username: username,
            password: password,
            email: email
        }).then(response => {
            return auth.login(this.state.username, this.state.password);
        }).catch(error => {
            return {
                success: false,
                message: 'Unable to register'
            }
        });
    }
}