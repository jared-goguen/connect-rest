import React from 'react';
import { Segment, Label } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react';

const titleLabelStyle = {
    marginRight: 30,
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
        let { title, viewClick, joinClick, inGame, loggedIn, full, redirectClick, players } = this.props;

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
            <Segment color='blue'>
                <Label size='big' color="teal" style={titleLabelStyle} horizontal>{title}</Label>
                { players.map((player, i) => 
                    <Label size='big' key={i} horizontal>{player}</Label>
                ) }
                <Button secondary onClick={viewClick} style={buttonStyle}>view game</Button>
                {lastButton}
            </Segment>
        );
    }
}