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
    }
}