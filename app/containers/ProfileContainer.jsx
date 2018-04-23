import React from 'react';
import { withRouter } from 'react-router';
import Profile from '../components/Profile'

import games from '../api/games';



class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {gamesData: []};

        games.retrievePlayer(response => {
            console.log(response.data);
            let player = response.data;
            this.setState({
                username: player.name
            });

            for (let id of player.games) {
                games.retrieveGame(id, response => {
                    let game = response.data;
                    let onClick = () => this.props.history.push(`/games/${game.id}/`);
                    let gameData = {
                        onClick,
                        title: game.title
                    }
                    let gamesData = this.state.gamesData.slice();
                    gamesData.push(gameData)
                    this.setState({
                        gamesData
                    });
                })
            }
        });
    }


    render() {
        if (this.state === null) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        } else {
            console.log(this.state);
            return (
                <Profile {...this.state} />
            );
        }
    }
}


export default withRouter(ProfileContainer);