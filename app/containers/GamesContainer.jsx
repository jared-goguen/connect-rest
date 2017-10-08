import React from 'react';
import { Segment } from 'semantic-ui-react';
import GameThumbContainer from './GameThumbContainer';
import games from '../api/games';


export default class GamesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
        this.getGames();
    }

    getGames = () => {
        games.retrieveList({}, response => {
            this.setState({games: response.data})
        });
    }

    render() {
        return (
            <Segment>
                {this.state.games.map((game, index) => 
                    <GameThumbContainer key={index} {...game} />
                )}
            </Segment>
        );
    }
}