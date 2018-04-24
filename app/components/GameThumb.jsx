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
        let { title, viewClick, joinClick, inGame, loggedIn, full, redirectClick } = this.props;

        console.log(this.props)
        if (inGame) {
            var lastButton = <Button disabled style={buttonStyle}>in game</Button>
        } else { if (loggedIn && !full) {
            var lastButton = <Button primary onClick={joinClick} style={buttonStyle}>join game</Button>
        } else { if (full) { 
            var lastButton = <Button disabled style={buttonStyle}>game full</Button>
        } else {
            var lastButton = <Button color='red' onClick={redirectClick} style={buttonStyle}>log in</Button>
        }}}

        return (
            <Segment color='yellow'>
                <Label size='big' horizontal>{title}</Label>
                <Button secondary onClick={viewClick} style={buttonStyle}>view game</Button>
                {lastButton}
            </Segment>
        );
    }
}