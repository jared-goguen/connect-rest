import React from 'react';
import { Segment, Label } from 'semantic-ui-react';
import GameThumbContainer from './GameThumbContainer';
import games from '../api/games';


const groupStyle = {
    marginLeft: 15,
    marginRight: 15,
}

export default class GamesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getOpenGames();
        this.getCurrentGames();
    }

    getOpenGames = () => {
        games.retrieveOpen({}, response => {
            this.setState({open: response.data.games})
        });
    }

    getCurrentGames = () => {
        games.retrieveCurrent({}, response => {
            this.setState({current: response.data.games})
        });
    }

    render() {
        return (
            <div>
                { this.state.open ? 
                    <Segment.Group style={groupStyle}>
                        <Label size='large'>open games</Label>
                        {this.state.open.map((game, index) => 
                            <GameThumbContainer key={index} {...game} />
                        )}
                    </Segment.Group>
                : null }
                { this.state.current ?
                    <Segment.Group style={groupStyle}>
                        <Label size='large'>current games</Label>
                        {this.state.current.map((game, index) => 
                            <GameThumbContainer key={index} {...game} />
                        )}
                    </Segment.Group>
                : null }
            </div>
        );
    }
}