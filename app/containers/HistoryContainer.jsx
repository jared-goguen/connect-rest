import React from 'react';
import { Table } from 'semantic-ui-react';


const maxRows = 8;

const constructRow = (move, index) => {
    return (
        <Table.Row key={index}>
            <Table.Cell>{move.player}</Table.Cell>
            <Table.Cell>{`(${move.position[0]},${move.position[1]})`}</Table.Cell>
        </Table.Row>
    )
};

const padRows = (rows) => {
    for (let i=rows.length; i < maxRows; i++) {
        rows.push(
            <Table.Row key={i}>
                <Table.Cell style={emptyStyle}>...</Table.Cell>
                <Table.Cell style={emptyStyle}>...</Table.Cell>
            </Table.Row>
        );
    }
    return rows;
};

const sliceRows = (rows, currentIndex) => {
    let startIndex = Math.max(0, currentIndex - maxRows);
    return rows.slice(startIndex, currentIndex);
};


export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: this.props.moves.length,
            maxIndex: this.props.moves.length
        };
    }

    decrement = () => {
        this.setState({
            currentIndex: Math.max(0, this.state.currentIndex - 1)
        });
    }

    increment = () => {
        this.setState({
            currentIndex: Math.min(this.state.maxIndex, this.state.currentIndex + 1)
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentIndex: nextProps.moves.length,
            maxIndex: nextProps.moves.length
        });
    }