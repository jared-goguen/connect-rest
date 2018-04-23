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
    position: 'absolute !important',
    top: 50,
    bottom: 50,
    overflowY: 'scroll',
    width: 300,
}

const buttonsStyle = {
    position: 'absolute !important',
    bottom: 0,
    marginTop: 10
}

const innerStyle = {
    position: 'relative !important',
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
                            <Segment>{`${index + 1}.`}</Segment>
                            <Segment>{`(${move.position[0]}, ${move.position[1]})`}</Segment>
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
