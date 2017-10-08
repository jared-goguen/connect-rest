import React from 'react';
import BoardContainer from './BoardContainer';

import games from '../api/games';


export default class GameDetail extends React.Component {
    constructor(props) {
        super(props);
        games.retrieveGame(this.props.match.params.id, response => 
        	this.setState(response.data)
        );
    }

    render() {
    	console.log(this.state);
        if (this.state === null) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        } else {
            return (
                <div className='GameDetail'>
                    <BoardContainer board={this.state.board} />
                </div>
            );
        }
    }
}