import '../css/Games.css';

import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';


class GameThumb extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LinkContainer to={'/games/' + this.props.id + '/'}>
                    <a>{this.props.title}</a>
                </LinkContainer>
            </div>
        );
    }
}

export default GameThumb;