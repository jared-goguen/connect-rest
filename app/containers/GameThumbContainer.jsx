import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import games from '../api/games';
import GameThumb from '../components/GameThumb';

const mapStateToProps = (state) => {
    return {loggedIn : state.user.loggedIn}
}


class GameThumbContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    joinClick = () => {
        games.joinGame(this.props.id, this.props.dispatch, this.props.history)
    }

    viewClick = () => {
        this.props.history.push('/games/' + this.props.id + '/');
    }

    redirectClick = () => {
        this.props.history.push('/login/');
    }

    render() {
        return (
            <GameThumb 
                title={this.props.title} 
                inGame={this.props.in_game}
                viewClick={this.viewClick} 
                joinClick={this.joinClick}
                redirectClick={this.redirectClick} 
                loggedIn={this.props.loggedIn}
                full={this.props.full}
                players={this.props.player_names}
            />
        );
    }
}

export default connect(mapStateToProps)(withRouter(GameThumbContainer));