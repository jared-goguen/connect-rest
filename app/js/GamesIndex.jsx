import React from 'react';

import { Link } from 'react-router-dom';

class GamesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to='/games/create/'>
                    <div className='generic-button'>create game</div>
                </Link>
            </div>
        );
    }
}

export default GamesIndex;