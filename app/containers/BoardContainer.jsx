import '../css/Board.css';
import React from 'react';
import Board from '../components/Board';
import History from '../components/History';
import { Grid, Button } from 'semantic-ui-react';

const gridStyle = {
    position: 'relative',
    bottom: 0,
}

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
            <Grid style={gridStyle} divided='vertically'>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Board board={this.getBoard(true)} partialClick={() => {}} />
                    </Grid.Column>
                    <Grid.Column width={1} />
                    <Grid.Column width={5}>
                        <History moves={this.props.history} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default BoardContainer;