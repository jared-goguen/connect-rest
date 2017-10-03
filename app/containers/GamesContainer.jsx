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
    }

    getGames = () => {
        games.retrieveList({}, response => this.setState({'games': response.data}));
    }

    render() {
        return (
            <div className='GamesContainer'>
                {this.state.games.map((game, index) => 
                    <GameThumb key={index} {...game} />
                )}
            </div>
        );
    }
}

export default GamesContainer;