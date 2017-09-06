import '../css/BoardContainer.css';

import React from 'react';

import Board from '../components/Board';
import { Button } from 'react-bootstrap';

import ai from '../api/ai';
import utility from '../js/utility';


class BoardContainer extends React.Component {
    /* 
    props
        rows: int
        cols: int
    state
        board: 2D array of {owner: int, playable: bool}
        turn: int[owner]
        done: bool
        winner: int[owner] or null
    */
    constructor(props) {
        super(props);
        this.state = this.initialState();
    }

    partialClick = (row, col) => {
        return (e) => {
            if (!this.state.done && !this.state.statis) {
                this.state.statis = true;
                this.move(row, col);
                if (this.state.done) {
                    this.doneTrigger();
                    return
                }

                ai.getMove(this.state, (response) => {
                    var ai_move = response.data;
                    this.state.statis = false;
                    this.move(ai_move.row, ai_move.col);
                    if (this.state.done) {
                        this.doneTrigger();
                    }
                });
            }
        }
    }

    move = (row, col) => {
        this.state.board[row][col].owner = this.state.turn;
        this.state.board[row][col].playable = false;
        if (row > 0) {
            this.state.board[row - 1][col].playable = true;
        }
        this.state.turn = (this.state.turn % 2) + 1;

        Object.assign(this.state, this.checkDone(row, col));
        this.setState(this.state);

    }

    // last move must have caused win
    checkDone = (row, col) => {
        var owner = this.state.board[row][col].owner;

        var horizontal = [];
        for (var j=Math.max(0, col-3); j <= Math.min(this.props.cols-1, col+3); j++) {
            horizontal.push(this.state.board[row][j].owner);
        }
        var maxH = utility.streak(horizontal, owner);

        var vertical = [];
        for (var i=Math.max(0, row-3); i <= Math.min(this.props.rows-1, row+3); i++) {
            vertical.push(this.state.board[i][col].owner);
        }
        var maxV = utility.streak(vertical, owner);

        var diagonalF = [];
        var fMin = Math.max(-3, -row, -col);
        var fMax = Math.min(3, this.props.rows-row-1, this.props.cols-col-1);
        for (var f=fMin; f <= fMax; f++) {
            diagonalF.push(this.state.board[row+f][col+f].owner);
        }
        var maxDF = utility.streak(diagonalF, owner);

        var diagonalB = [];
        var bMin = Math.max(-3, -this.props.rows+row+1, -col);
        var bMax = Math.min(3, row, this.props.cols-col-1);
        for (var b=bMin; b <= bMax; b++) {
            diagonalB.push(this.state.board[row-b][col+b].owner);
        }
        var maxDB = utility.streak(diagonalB, owner);

        var maxStreak = Math.max(maxH, maxV, maxDF, maxDB);
        if (maxStreak >= 4) {
            return {
                done: true,
                winner: owner,
                statis: false
            }
        }

        for (var row=0; row < this.props.rows; row++) {
            for (var col=0; col < this.props.cols; col++) {
                if (this.state.board[row][col].playable) {
                    return {
                        done: false,
                        statis: false
                    }
                }
            }
        }

        return {
            done: true,
            statis: false
        }

    }

    doneTrigger = () => {
        var message;
        if (this.state.winner === null) {
            message = 'The game resulted in a tie.'
        } else {
            message = 'Player ' + String(this.state.winner) + ' won!'
        }
        setTimeout(function() {alert(message);}, 100);
    }

    initialState() {
        var state = { 
            board: [],
            turn: 1,
            done: false,
            winner: null,
            statis: false
        };

        for (var row=0; row < this.props.rows; row++) {
            var row_array = [];
            for (var col=0; col < this.props.cols; col++) {
                row_array.push({
                    owner: 0,
                    playable: row === this.props.rows - 1 ? true : false
                });
            }
            state.board.push(row_array);
        }

        return state;
    }

    reset = () => {
        this.setState(this.initialState());
    }

    render() {
        return (
            <div className='BoardContainer'>
                <Board board={this.state.board} 
                       rows={this.props.rows} 
                       cols={this.props.cols} 
                       partialClick={this.partialClick} />
                <Button onClick={this.reset}>Reset</Button>
            </div>   
        );
    }
}

export default BoardContainer;