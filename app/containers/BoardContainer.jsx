import React from 'react';

import Board from '../components/Board';


class BoardContainer extends React.Component {
    /* 
    props
        board: 2D array of {owner: int, playable: bool}
    */
    constructor(props) {
        super(props);
    }

    getBoard = (canPlay) => {
        var row_count = this.props.board.length;
        var col_count = this.props.board[0].length;
        var rows = [];
        for (var row=0; row < row_count; row++) {
            var cells = [];
            for (var col=0; col < col_count; col++) {
                var owner = this.props.board[row][col];
                var playable = canPlay && (owner === -1 && (row === row_count - 1 || this.props.board[row + 1][col] !== -1));
                cells.push({owner, playable});
            }
            rows.push(cells);
        }
        return rows;
    }

    render() {
        return (
            <div className='BoardContainer'>
                <Board board={this.getBoard(true)}
                       partialClick={() => {}} />
            </div>
        );
    }
}

export default BoardContainer;