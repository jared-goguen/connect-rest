import React from 'react';

import { Link } from 'react-router-dom';

class GamesCreate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>let's create a game...</h2>
                <Link to='/games/'>back home</Link>
            </div>
        );
    }
}

export default GamesCreate;