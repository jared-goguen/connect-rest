import '../css/Modal.css';

import React from 'react';

class ModalSpan extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>{this.props.text}</p>
        );
    }
}

export default ModalSpan;