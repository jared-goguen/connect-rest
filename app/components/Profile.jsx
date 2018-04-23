import React from 'react';
import { Header, Button } from 'semantic-ui-react';

const profileStyle = {

};

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { username, gamesData } = this.props;
        return (
            <div style={profileStyle}>
                <Header as='h3'>{username}'s profile</Header>
                {gamesData.map((gameData, i) => 
                    <Button onClick={gameData.onClick} key={i}>{gameData.title}</Button>
                )}
            </div>
        );
    }
}