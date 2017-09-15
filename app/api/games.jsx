import axios from './axios-default';

module.exports = {
    create: function(state, callback) {
        axios.post('/api/games/', state).then(response => {
            console.log(response);
            callback({
                success: true,
                message: 'game created'
            })
        }).catch(error => {
            callback({
                success: false,
                message: 'unable to create game'
            });
        });
    },

    retrieveList: function(state, callback) {
        axios.get('/api/games/', state).then(response => {
            callback(response);
        }).catch(error => {
            callback(error);
        })
    },

    retrieveGame: function(id, callback) {
        axios.get('/api/games/' + id + '/').then(response => {
            callback(response);
        }).catch(error => {
            callback(error);
        })
    }
}