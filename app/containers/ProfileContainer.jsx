import React from 'react';
import Profile from '../components/Profile';
import GameList from '../components/GameList';

import games from '../api/games';



export default class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getOpenGames();
        this.getCurrentGames();
    }

    getOpenGames = () => {
        games.retrievePlayerOpen(response => {
            this.setState({open: response.data.games})
        });
    }

    getCurrentGames = () => {
        games.retrievePlayerCurrent(response => {
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