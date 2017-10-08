import React from 'react';
import { Table, Menu, Icon, Progress } from 'semantic-ui-react';

const emptyStyle = {
    color: 'white',
}

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

    render() {
        let rows = padRows(sliceRows(this.props.moves.map(constructRow), this.state.currentIndex));

        return(
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Player</Table.HeaderCell>
                        <Table.HeaderCell>Move</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {rows}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2'>
                            <Menu fluid>
                                <Menu.Item style={{width: '15%'}} as='a' onClick={this.decrement} icon>
                                    <Icon name='left chevron' />
                                </Menu.Item>
                                <Menu.Item style={{width: '70%'}}>
                                { 
                                    this.state.currentIndex || this.state.maxIndex 
                                        ? 
                                    <Progress 
                                        style={{width: '100%', marginBottom: 0}} 
                                        inverted 
                                        color='teal' 
                                        value={ this.state.currentIndex } 
                                        total={ this.state.maxIndex } 
                                        progress='ratio' 
                                    />
                                        : 
                                    null
                                }
                                </Menu.Item>
                                <Menu.Item style={{width: '15%'}} as='a' onClick={this.increment} icon>
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
