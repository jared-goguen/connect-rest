import React from 'react';
import Game from '../components/Game';

import { Button } from 'semantic-ui-react';

class BoardContainer extends React.Component {
    /* 
    props
        board: 2D array of {owner: int, playable: bool}
    */
    constructor(props) {
        super(props);
    }

    partialClick = (row, col) => () => {
        this.props.handleMove(row, col);
    }

    getBoard = () => {
        console.log(this.props);
        var row_count = this.props.board.length;
        var col_count = this.props.board[0].length;
        var rows = [];
        for (var row=0; row < row_count; row++) {
            var cells = [];
            for (var col=0; col < col_count; col++) {
                var owner = this.props.board[row][col];
                var playable = this.props.isTurn && (owner === -1 && (row === row_count - 1 || this.props.board[row + 1][col] !== -1));
                var selected = (row == this.props.moveRow) && (col == this.props.moveCol);
                var currentTurn = this.props.currentTurn;
                cells.push({owner, playable, selected, currentTurn});
            }
            rows.push(cells);
        }
        return rows;
    }

    getButtons = () => {
        return [
            <Button key={0}>reset</Button>,
            <Button key={1}>left</Button>,
            <Button key={2}>right</Button>
        ];
    }

    render() {
        return (
            <Game 
                historyProps={{moves: this.props.history, buttons: this.getButtons()}}
                boardProps={{board: this.getBoard(), partialClick: this.partialClick}}
            />
        );
    }
}

export default BoardContainer;