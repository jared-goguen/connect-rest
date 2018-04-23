import React from 'react';
import History from './History';
import Board from './Board';

const containerStyle = {
    position: 'absolute',
    top: '10vh',
    bottom: '5vh',
    left: '5vw',
    right: '5vw'
}

const boardStyle = {
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 350,
}

const historyStyle = {
    height: '100% !important',
    width: 300,
    float: 'right',
}

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={containerStyle}>
                <History {...this.props.historyProps} style={historyStyle}/>
                <Board {...this.props.boardProps} style={boardStyle}/>
            </div>
        );
    }
}