import React from 'react';
import BoardContainer from './BoardContainer';

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
        if (this.state === null) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        } else {
            return (
                <div>
                    <BoardContainer 
                        board={this.state.board} 
                        history={this.state.history} 
                    />
                </div>
            );
        }
    }
}

export default GameDetail;