import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import GamesContainer from '../containers/GamesContainer';

const buttonStyle = {
    marginLeft: 15
};

export default class GamesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Games'>
                <Link to='/games/create/'>
                    <Button color='blue' style={buttonStyle}>
                        create game
                    </Button>
                </Link>
                <GamesContainer />
            </div>
        );
    }
}