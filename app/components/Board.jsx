import '../css/Board.css';
import React from 'react';
import Cell from './Cell';


export default class Board extends React.Component {
    /* 
    props
        board: 2D array of {owner: int, playable: bool}
        partialClick: function(row, col) -> function(e) bound to BoardContainer
    */
    constructor(props) {
        super(props);
    }


    render() {
        var row_count = this.props.board.length;
        var col_count = this.props.board[0].length;
        var rows = [];
        var cell_options = {};
        cell_options.partialClick = this.props.partialClick;
        for (var row=0; row < row_count; row++) {
            var cells = [];
            cell_options.row = row;
            for (var col=0; col < col_count; col++) {
                cell_options.key = cell_options.col = col;
                cell_options.owner = this.props.board[row][col].owner;
                cell_options.playable = this.props.board[row][col].playable;
                cell_options.selected = this.props.board[row][col].selected;
                cell_options.currentTurn = this.props.board[row][col].currentTurn;
                cells.push(<Cell {...cell_options} />)
            }
            rows.push(<div key={row} className='Row'>{cells}</div>);
        }
        return (
            <div style={this.props.style}>
                <div className='BoardWrapper'>
                    <div className='Board'>
                        {rows}
                    </div>
                </div>
            </div>
        );
    }

}