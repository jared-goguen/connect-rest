import '../css/Games.css';

import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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
            </div>
        );
    }
}

export default GamesIndex;