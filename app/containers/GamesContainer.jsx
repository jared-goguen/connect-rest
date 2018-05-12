import React from 'react';
import { Segment, Label } from 'semantic-ui-react';
import GameList from '../components/GameList';
import games from '../api/games';


export default class GamesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getOpenGames();
        this.getCurrentGames();
    }

    getOpenGames = () => {
        games.retrieveOpen(response => {
            this.setState({open: response.data.games})
        });
    }

    getCurrentGames = () => {
        games.retrieveCurrent(response => {
            this.setState({current: response.data.games})
        });
    }

    render() {
        return (
            <div>
                <GameList title='open games' games={this.state.open} />
                <GameList title='current games' games={this.state.current} />
            </div>
        );
    }
}