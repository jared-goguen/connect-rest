import '../css/Index.css';

import React from 'react';

import axios from './axios-default';

class Index extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>A place for humans to play with other humans (or a mediocre AI).</h2>
				{/*
				<button onClick={() => {
					axios.get('/api/users/i/').then(response => {
						console.log(response);
					}).catch(error => {
						console.log(error);
					});
				}} >test</button>
				*/}
			</div>
		);
	}
}

export default Index;