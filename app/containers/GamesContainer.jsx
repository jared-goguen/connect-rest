import '../css/Games.css';

import React from 'react';
import GameThumb from './GameThumb';

import games from '../api/games';


class GamesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
        this.getGames();
        console.log(this.state);
    }

    getGames = () => {
        games.retrieveList({}, response => this.setState({'games': response.data}));
    }

    render() {
        return (
            <div className='GamesContainer'>
                    <p>Games:</p>
                    <ul>
                        {this.state.games.map((game, index) => 
                            <li key={index}><GameThumb {...game} /></li>
                        )}
                    </ul>
            </div>
        );
    }
}

export default GamesContainer;