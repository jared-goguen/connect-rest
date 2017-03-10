import React from 'react';
import ReactDOM  from 'react-dom';
import fetch from 'fetch';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			games: []
		};
	}

	componentDidMount() {
		fetch('api/games.json')
		.then(function(response) {
			this.props.games = response.data;
			console.log(this.props.games)
		})
	}

	render() {
		return (
			<div>
				<p>
					${this.props.games}
				</p>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById("app"));