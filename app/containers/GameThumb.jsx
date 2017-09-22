import '../css/Games.css';

import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

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
            <div>
                <LinkContainer to={'/games/' + this.props.id + '/'}>
                    <a>{this.props.title}</a>
                </LinkContainer>
                <Button onClick={this.joinGame}>join game</Button>
            </div>
        );
    }
}

export default GameThumb;