import React from 'react';
import { Segment, Label } from 'semantic-ui-react';
import GameThumbContainer from './GameThumbContainer';

const groupStyle = {
    marginLeft: 15,
    marginRight: 15,
}

export default class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            stop: 5,
            games: [],
            loading: false
        };
        this.loading = false;
    }

    addGames = () => {
        if (this.loading) return;

        this.loading = true;
        this.props.getGames(this.state.start, this.state.stop, response => {
            let addedGames = response.data.games;
            console.log(addedGames);
            let newStart = this.state.start + addedGames.length;
            let newStop = newStart + 5;
            let allGames = this.state.games.slice().concat(addedGames);
            this.setState({
                games: allGames,
                start: newStart,
                stop: newStop,
            }, () => {
                this.loading = false;
            })
        });
    }

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && 
                this.state.games.length
            ) {
                this.addGames();
        }
    }


    componentDidMount() {
        let fillWindow = () => {
            if (document.body.scrollHeight <= document.body.clientHeight) {
                this.addGames();
            }
        }
        let interval = setInterval(fillWindow, 100);
        setTimeout(function() {clearInterval(interval)}, 1000);
        window.addEventListener('scroll', this.addGames, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.addGames, false);
    }

    render() {
        return (
            this.state.games && this.state.games.length ? 
                <Segment.Group style={groupStyle}>
                    <Label size='large'>{this.props.title}</Label>
                    {this.state.games.map((game, index) => 
                        <GameThumbContainer key={index} {...game} />
                    )}
                </Segment.Group>
            : null
        );
    }
}



