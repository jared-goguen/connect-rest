import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const oddStyle = {
    backgroundColor: '#ffffff'
};

const evenStyle = {
    backgroundColor: '#eeeeee'
};

const getStyle = (i) => (i % 2 ? oddStyle : evenStyle);

const headerStyle = {
    height: 50,
}

const tableStyle = {
    position: 'absolute',
    top: 50,
    bottom: 50,
    overflowY: 'scroll',
    width: 300,
}

const buttonsStyle = {
    position: 'absolute',
    bottom: 0,
    marginTop: 10,
}

const innerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
}

export default class History extends React.Component {
    /*
    props
        moves: array of 2-tuples
        buttons: list of buttons at bottom
    */
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={this.props.style}>
                <div style={headerStyle}>
                    <Header as='h4'>history</Header>
                </div>
                <div style={tableStyle}>
                    <Segment.Group>
                    {this.props.moves.map((move, index) => (
                        <Segment.Group horizontal key={index} style={getStyle(index)}>
                            <Segment>{`${index}.`}</Segment>
                            <Segment>{`(${move[0]}, ${move[1]})`}</Segment>
                        </Segment.Group>
                    ))}
                    </Segment.Group>
                </div>
                <div style={buttonsStyle}>
                    <div style={innerStyle}>
                        {this.props.buttons}
                    </div>
                </div>
            </div>
        );
    }

}
