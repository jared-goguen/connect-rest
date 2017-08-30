import '../css/Index.css';

import React from 'react';

import axios from './axios-default';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>A place for humans to play with other humans (or a mediocre AI).</h2>
            </div>
        );
    }
}

export default Index;