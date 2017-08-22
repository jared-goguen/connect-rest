import React from 'react';
import ReactDOM  from 'react-dom';
import 'whatwg-fetch';

function join(arr, delim) {
    if (arr.length === 0) {
        return '';
    }

    if (delim === undefined) {
        delim = ' ';
    }

    var string = String(arr[0]);

    for (var i=1; i < arr.length; i++) {
        string += ' ' + String(arr[i]);
    }

    return string;
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Board rows='6' cols='7' />
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            board: [],
            turn: 1,
        }
        for (var row=0; row < this.props.rows; row++) {
            var temp = [];
            for (var col=0; col < this.props.cols; col++) {
                temp.push({
                    owner: 0,
                    playable: row === this.props.rows - 1 ? true : false
                });
            }
            this.state.board.push(temp);
        }
        this.partialClick = this.partialClick.bind(this);
        this.move = this.move.bind(this);
    }

    partialClick(row, col) {
        return (e) => {
            if (!this.state.statis) {
                this.state.statis = true;
                this.move(row, col);

                fetch('/api/ai/get_move', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.state),
                }).then((response) => 
                    response.json()
                ).then((response) => {
                    var ai_move = response;
                    this.state.statis = false;
                    this.move(ai_move.row, ai_move.col);
                });
            }
        }
    }

    move(row, col) {
        this.state.board[row][col].owner = this.state.turn;
        this.state.board[row][col].playable = false;
        if (row > 0) {
            this.state.board[row - 1][col].playable = true;
        }
        this.state.turn = (this.state.turn % 2) + 1;

        this.setState(this.state);
    }

    render() {
        var rows = [];
        var cell_options = {};
        cell_options.callback = this.partialClick;
        for (var row=0; row < this.props.rows; row++) {
            var cells = [];
            cell_options.row = row;
            for (var col=0; col < this.props.cols; col++) {
                cell_options.key = cell_options.col = col;
                cell_options.owner = this.state.board[row][col].owner;
                cell_options.playable = this.state.board[row][col].playable;
                cells.push(<Cell {...cell_options} />)
            }
            rows.push(<div key={row} className='row'>{cells}</div>);
        }
        return <div>{rows}</div>;
    }
}

class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var circle_classes = ['circle'];
        circle_classes.push('color' + String(this.props.owner));
        var circle_options = {};
        if (this.props.playable) {
            circle_classes.push('playable');
            circle_options.onClick = this.props.callback(this.props.row, this.props.col);
        }

        circle_options.className = join(circle_classes);

        return (
            <div className='cell'>
                <div {...circle_options} />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));