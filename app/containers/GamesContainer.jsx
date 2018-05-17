import React from 'react';
import { Segment, Label } from 'semantic-ui-react';
import GameList from '../components/GameList';
import GameListInfinite from './GameListInfinite';
import games from '../api/games';


export default class GamesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    dataFetch = () => {
        this.getOpenGames();
    }

    componentDidMount() {
        this.interval = setInterval(this.dataFetch, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getOpenGames = () => {
        games.retrieveOpen(response => {
            this.setState({open: response.data.games})
        });
    }


    render() {
        return (
            <div>
                <GameList title='open games' games={this.state.open} />
                <GameListInfinite title='current games' getGames={games.retrieveCurrentSlice} />
            </div>
        );
    }
}