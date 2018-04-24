import '../css/Board.css';
import React from 'react';
import Game from '../components/Game';
import { Grid, Button } from 'semantic-ui-react';
import ai from '../api/ai';
import utility from '../js/utility';



export default class AIBoardContainer extends React.Component {
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

        this.state = this.getInitialState();
    }

    getInitialState = () => {
        let state = { 
            board: [],
            moves: [],
            turn: 0,
            done: false,
            winner: null,
            statis: false
        };

        for (var row=0; row < this.props.rows; row++) {
            var row_array = [];
            for (var col=0; col < this.props.cols; col++) {
                row_array.push({
                    owner: -1,
                    playable: row === this.props.rows - 1 ? true : false,
                    currentTurn: state.turn
                });
            }
            state.board.push(row_array);
        }

        return state;
    }

    partialClick = (row, col) => {
        return (e) => {
            if (!this.state.done && !this.state.statis) {
                this.setState({statis: true});
                var boardCopy = JSON.parse(JSON.stringify(this.state.board));
                var stateCopy = this.makeMove(boardCopy, row, col);
                if (stateCopy.done) {
                    this.doneTrigger(stateCopy);
                    return
                }

                ai.getMove(stateCopy, (response) => {
                    var ai_move = response.data;
                    var stateCopy = this.makeMove(boardCopy, ai_move.row, ai_move.col);
                    if (stateCopy.done) {
                        this.doneTrigger(stateCopy);
                    }
                    this.setState({statis: false});
                });
            }
        }
    }

    makeMove = (board, row, col) => {
        let move = {player: this.state.turn, position: [row, col]};
        let movesCopy = JSON.parse(JSON.stringify(this.state.moves));
        movesCopy.push(move);

        board[row][col].owner = this.state.turn;
        board[row][col].playable = false;
        if (row > 0) {
            board[row - 1][col].playable = true;
        }
        var turn = (this.state.turn + 1) % 2;

        var state = {
            board: board,
            turn: turn,
            moves: movesCopy
        };

        Object.assign(state, this.checkDone(board, row, col));
        this.setState(state);
        return state;

    }

    // last move must have caused win
    checkDone = (board, row, col) => {
        var owner = board[row][col].owner;
        console.log(owner);

        var horizontal = [];
        for (var j=Math.max(0, col-3); j <= Math.min(this.props.cols-1, col+3); j++) {
            horizontal.push(board[row][j].owner);
        }
        var maxH = utility.streak(horizontal, owner);

        var vertical = [];
        for (var i=Math.max(0, row-3); i <= Math.min(this.props.rows-1, row+3); i++) {
            vertical.push(board[i][col].owner);
        }
        var maxV = utility.streak(vertical, owner);

        var diagonalF = [];
        var fMin = Math.max(-3, -row, -col);
        var fMax = Math.min(3, this.props.rows-row-1, this.props.cols-col-1);
        for (var f=fMin; f <= fMax; f++) {
            diagonalF.push(board[row+f][col+f].owner);
        }
        var maxDF = utility.streak(diagonalF, owner);

        var diagonalB = [];
        var bMin = Math.max(-3, -this.props.rows+row+1, -col);
        var bMax = Math.min(3, row, this.props.cols-col-1);
        for (var b=bMin; b <= bMax; b++) {
            diagonalB.push(board[row-b][col+b].owner);
        }
        var maxDB = utility.streak(diagonalB, owner);

        var maxStreak = Math.max(maxH, maxV, maxDF, maxDB);
        if (maxStreak >= 4) {
            return {
                done: true,
                winner: owner
            }
        }

        for (var row=0; row < this.props.rows; row++) {
            for (var col=0; col < this.props.cols; col++) {
                if (board[row][col].playable) {
                    return {done: false}
                }
            }
        }

        return {
            done: true,
            winner: null
        }

    }

    doneTrigger = (state) => {
        var message;
        if (state.winner === null) {
            message = 'The game resulted in a tie.'
        } else {
            message = 'Player ' + String(state.winner) + ' won!'
        }
        setTimeout(function() {alert(message);}, 100);
    }

    reset = () => {
        this.setState(this.getInitialState());
    }

    getButtons = () => {
        return [
            <Button key={0} onClick={this.reset}>reset</Button>
        ];
    }

    render() {
        return (
            <Game 
                historyProps={{moves: this.state.moves, buttons: this.getButtons()}}
                boardProps={{board: this.state.board, partialClick: this.partialClick}}
            />
        );
    }

}

AIBoardContainer.defaultProps = {
    rows: 6,
    cols: 7
};