import React from 'react';
import { Segment, Label } from 'semantic-ui-react';
import GameThumbContainer from '../containers/GameThumbContainer';

const groupStyle = {
    marginLeft: 15,
    marginRight: 15,
}

export default class GameList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.games && this.props.games.length ? 
                <Segment.Group style={groupStyle}>
                    <Label size='large'>{this.props.title}</Label>
                    {this.props.games.map((game, index) => 
                        <GameThumbContainer key={index} {...game} />
                    )}
                </Segment.Group>
            : null
        );
    }
}



