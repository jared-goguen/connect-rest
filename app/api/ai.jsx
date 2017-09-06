import axios from './axios-default';

module.exports = {
	getMove: function(state, callback) {
		axios.post('/api/ai/get_move', this.state).then(callback).catch(callback);
	}
}
