import React from 'react';
import ReactDOM  from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BoardContainer from './Board.jsx'
import LoginContainer from './LoginContainer.jsx'


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="app">
                    <LoginContainer/>
                    {/* <BoardContainer rows='6' cols='7' /> */}
                </div>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
