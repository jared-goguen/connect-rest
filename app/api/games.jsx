import axios from './axios-default';

module.exports = {
    create: function(state, dispatch, history) {
        axios.post('/api/games/', state).then(response => {
            console.log(response);
            history.push(`/games/${response.data.id}/`);
        }).catch(error => {
            console.log(error);
        });
    },

    retrieveList: function(state, callback) {
        axios.get('/api/games/', state).then(response => {
            callback(response);
        }).catch(error => {
            console.log(error);
        })
    },

    retrieveOpen: function(state, callback) {
        axios.get('/api/games/open', state).then(response => {
            callback(response);
        }).catch(error => {
            console.log(error);
        })
    },

    retrieveCurrent: function(state, callback) {
        axios.get('/api/games/current', state).then(response => {
            callback(response);
        }).catch(error => {
            console.log(error);
        })
    },

    retrieveGame: function(id, callback) {
        axios.get(`/api/games/${id}/`).then(response => {
            callback(response);
        }).catch(error => {
            console.log(error);
        })
    },

    joinGame: function(id, dispatch, history, callback) {
        axios.post(`/api/games/join/${id}/`).then(response => {
            if (callback) {
                callback();
            }
            history.push(`/games/${id}/`);
        }).catch(error => {
            console.log(error);
        })
    },

    retrievePlayer: function(callback) {
        axios.get(`/api/players/i/`).then(response => {
            callback(response);
        }).catch(error => {
            console.log(error);
        })  
    },

    submitMove: function(id, row, col, callback) {
        axios.post(`/api/games/move/${id}/`, {row, col}).then(response => {
            console.log(response);
            callback(response);
        }).catch(error => {
            console.log(error);
        })
    },



}