import '../css/Games.css';

import React from 'react';

import games from '../api/games';


class GameDetail extends React.Component {
    constructor(props) {
        super(props);
        games.retrieveGame(this.props.match.params.id, response => 
        	this.setState(response.data)
        );
    }



    render() {
    	console.log(this.state);
        return (
            <div className='GameDetail'>
                <p>heres a game!</p>
            </div>
        );
    }
}

export default GameDetail;