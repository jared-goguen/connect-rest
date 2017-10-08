import axios from './axios-default';

module.exports = {
    create: function(state, dispatch, history) {
        axios.post('/api/games/', state).then(response => {
            console.log(response);
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

    retrieveGame: function(id, callback) {
        axios.get(`/api/games/${id}/`).then(response => {
            callback(response);
        }).catch(error => {
            console.log(error);
        })
    },

    joinGame: function(id, dispatch, history) {
        axios.post(`/api/games/join/${id}/`).then(response => {
            history.push(`/games/${id}/`);
        }).catch(error => {
            console.log(error);
        })
    }
}