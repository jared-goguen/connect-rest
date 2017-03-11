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

	componentWillMount() {
		fetch('/api/games.json')
			.then(response => response.json())
			.then(json => {
				this.setState({games: json});
			}).catch(ex => console.log(ex));
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<h1>Games</h1>
				<ul>
					{this.state.games.map((game, index) => 
						<li key={index}><span>{game.url}</span>
							<ul>
								{game.instances.map((instance, index) =>
									<li key={index}><span>{instance}</span></li>
								)}
							</ul>
						</li>
					)}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById("app"));