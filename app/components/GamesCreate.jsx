import '../css/Forms.css';

import React from 'react';

import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import games from '../api/games'


class GamesCreate extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
        };
    }

    validateForm = () => {
        return this.state.title.length > 0;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        games.create(this.state, (response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div className='Basic'>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId='title' bsSize='large'>
                        <ControlLabel>title</ControlLabel>
                        <FormControl
                            autoFocus
                            value={this.state.title}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <Button
                        bsSize='large'
                        className='mainButton'
                        disabled={ !this.validateForm() }
                        type='submit'>
                        create game
                    </Button>
                </form>
            </div>
        );
    }
}

export default GamesCreate;