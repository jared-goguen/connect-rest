import React from 'react';
import ReactDOM  from 'react-dom';
import 'whatwg-fetch';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			games: []
		};
	}

	componentDidMount() {
		fetch('/api/games.json')
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				console.log(json)
			}).catch(function(ex) {
				console.log('api failed', ex);
			});
	}

	render() {
		return (
			<div>
				<p>
					hi!
				</p>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById("app"));