import React from 'react';
import ReactDOM  from 'react-dom';

import BoardContainer from './Board';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <BoardContainer rows='6' cols='7' />
            </div>
        )
    }
}

export default App;