import '../css/Games.css';

import React from 'react';

import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

import games from '../api/games';


class GameThumb extends React.Component {
    constructor(props) {
        super(props);
    }

    joinGame = () => {
        games.joinGame(this.props.id, response => {
            console.log(response);
        })
    }

    render() {
        return (
            <div className='GameThumb'>
                <p>{this.props.title}</p>
                <Button onClick={() => this.props.history.push('/games/' + this.props.id + '/')}>view game</Button>
                <Button onClick={this.joinGame}>join game</Button>
            </div>
        );
    }
}

export default GameThumb;