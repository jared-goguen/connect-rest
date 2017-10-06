import React from 'react';
import { Table, Menu, Icon } from 'semantic-ui-react';

const emptyStyle = {
    color: 'white',
}

const maxRows = 8;

const constructRow = (move, index) => {
    return (
        <Table.Row key={index}>
            <Table.Cell>{move.player}</Table.Cell>
            <Table.Cell>{`(${move.position[0]},${move.position[0]})`}</Table.Cell>
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

const spliceRows = (rows, currentIndex) => {
    let startIndex = Math.max(0, currentIndex - maxRows);
    return rows.splice(startIndex, currentIndex);
};


export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

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

    render() {
        let rows = this.props.moves.map(constructRow);
        let currentIndex = this.props.moves.length;
        return(
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Player</Table.HeaderCell>
                        <Table.HeaderCell>Move</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {padRows(spliceRows(rows, currentIndex))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2'>
                            <Menu>
                                <Menu.Item as='a' onClick={this.decrement} icon>
                                    <Icon name='left chevron' />
                                </Menu.Item>
                                <Menu.Item as='a' onClick={this.increment} icon>
                                    <Icon name='right chevron' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        );
    }

}
