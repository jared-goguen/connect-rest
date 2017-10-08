import React from 'react';
import GamesCreate from '../components/GamesCreate';
import games from '../api/games'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class GamesCreateContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        games.create(this.state, this.props.dispatch, this.props.history);
    }

    render() {
        return <GamesCreate submit={this.handleSubmit} change={this.handleChange} />
    }
}

export default connect()(withRouter(GamesCreateContainer));