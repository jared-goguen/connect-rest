import '../css/Board.css';
import React from 'react';
import utility from '../js/utility';


export default class Cell extends React.Component {
    /*
    props
        owner: int
        playable: bool
        partialClick: function(row, col) -> function(e) bound to BoardContainer
    */
    constructor(props) {
        super(props);
    }

    render() {
        var circle_classes = ['Circle'];
        var circle_options = {};
        
        if (this.props.selected) {
            circle_classes.push('Selected' + this.props.currentTurn.toString());
        } else if (this.props.playable) {
            circle_classes.push('Playable' + this.props.currentTurn.toString());
            circle_options.onClick = this.props.partialClick(this.props.row, this.props.col);
        } else {
            circle_classes.push('color' + String(this.props.owner));
        }

        circle_options.className = utility.join(circle_classes);

        return (
            <div className='Cell'>
                <div {...circle_options} />
            </div>
        );
    }
}