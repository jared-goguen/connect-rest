import React from 'react';
import { Segment, Label } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react';

const labelStyle = {
    float: 'left'
};

const buttonStyle = {
    float: 'right',
    padding: 10,
    marginLeft: 10,
};

export default class GameThumb extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title, viewClick, joinClick } = this.props;
        return (
            <Segment color='yellow'>
                <Label size='big' horizontal>{title}</Label>
                {this.props.inGame ? 
                    <Button disabled onClick={joinClick} style={buttonStyle}>
                        in game
                    </Button>
                :
                    <Button primary onClick={joinClick} style={buttonStyle}>
                        join game
                    </Button>
                }
                <Button secondary onClick={viewClick} style={buttonStyle}>
                    view game
                </Button>
            </Segment>
        );
    }
}