import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import games from '../api/games';
import GameThumb from '../components/GameThumb';


class GameThumbContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    joinClick = () => {
        games.joinGame(this.props.id, this.props.dispatch, this.props.history)
    }

    viewClick = () => {
        this.props.history.push('/games/' + this.props.id + '/');
    }

    render() {
        return (
            <GameThumb 
                title={this.props.title} 
                viewClick={this.viewClick} 
                joinClick={this.joinClick} 
            />
        );
    }
}

export default connect()(withRouter(GameThumbContainer));