import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BoardContainer from './BoardContainer';
import { Label, Button } from 'semantic-ui-react';

import games from '../api/games';


const labelStyle = {
    height: 30
}


const mapStateToProps = (state) => {
    return {loggedIn : state.loggedIn}
}


class GameDetail extends React.Component {
    constructor(props) {
        super(props);
        games.retrieveGame(this.props.match.params.id, response => 
            this.setState(response.data)
        );
        this.state = {};
        this.state.moveRow = undefined;
        this.state.moveCol = undefined;
    }

    handleMove = (row, col) => {
        this.setState({
            moveRow: row,
            moveCol: col
        });
    }

    submitMove = () => {
        games.submitMove(this.state.id, this.state.moveRow, this.state.moveCol, response => {
            this.setState(response.data.game);
            this.setState({
                moveRow: undefined,
                moveCol: undefined
            });
        });
    }

    handleJoin = () => {
        games.joinGame(this.state.id, this.props.dispatch, this.props.history)
    }

    render() {
        if (!this.state.board) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        } else {
            return (
                <div>
                    <Button disabled style={labelStyle} >{this.state.status}</Button>
                    { this.state.is_turn ? 
                        <Button color='blue' style={labelStyle} onClick={this.submitMove}>Submit Move</Button>
                    :
                        null
                    }
                    { !this.state.in_game && this.props.loggedIn ? 
                        <Button color='green' style={labelStyle} onClick={this.handleJoin}>Join Game</Button>
                    :
                        null
                    }
                    <BoardContainer 
                        board={this.state.board} 
                        history={this.state.history}
                        moveRow={this.state.moveRow}
                        moveCol={this.state.moveCol}
                        isTurn={this.state.is_turn}
                        handleMove={this.handleMove}
                        currentTurn={this.state.turn}
                    />
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(withRouter(GameDetail));