import '../css/Games.css';

import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import GamesContainer from '../containers/GamesContainer';

class GamesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Games'>
                <Link to='/games/create/'>
                    <Button bsSize='large'>
                        create game
                    </Button>
                </Link>
                <GamesContainer />
            </div>
        );
    }
}

export default GamesIndex;