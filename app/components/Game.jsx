import React from 'react';
import History from './History';
import Board from './Board';

const containerStyle = {
    position: 'absolute',
    top: 100,
    bottom: '5vh',
    left: '5vw',
    right: '5vw'
}

const boardStyle = {
}

/*
const historyStyle = {
    height: '100%',
    width: 300,
    float: 'right',
}
*/

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={containerStyle}>
                {/* <History {...this.props.historyProps} style={historyStyle}/> */}
                <Board {...this.props.boardProps} style={boardStyle}/>
            </div>
        );
    }
}