import React from 'react';
import ReactDOM  from 'react-dom';

var App = React.createClass({
    render: function () {
        return (
            <p>First Component!</p>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById("app"));