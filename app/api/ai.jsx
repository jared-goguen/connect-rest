import axios from './axios-default';

module.exports = {
	getMove: function(state, callback) {
		axios.post('/api/ai/get_move', state).then(callback).catch(callback);
	}
}
