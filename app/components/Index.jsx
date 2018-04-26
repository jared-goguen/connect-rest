import React from 'react';

const indexStyle = {
    marginLeft: 15
};

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={indexStyle}>
                <h2>A place for humans to play with other humans (or a mediocre AI).</h2>
            </div>
        );
    }
}