import React from 'react';
import { Input, Label } from 'semantic-ui-react'

const divStyle = {
    marginBottom: 10
}

const labelStyle = {
    width: 100,
}

const errorStyle = {
    position: 'relative',
    left: 100
}

const labelMaker = (name, content) => <Label content={content} style={labelStyle} />;
const errorMaker = (message) => <Label basic color='pink' pointing='left' style={errorStyle}>{message}</Label>

export class LabeledInput extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.error !== this.props.error;
    }

    render() {
        let {label, name, placeholder, type, change} = this.props;
        return (
            <div style={divStyle}>
                <Input 
                    name={name}
                    label={labelMaker(name, label)}
                    type={type} 
                    placeholder={placeholder}
                    onChange={change}
                />
                { this.props.error ? errorMaker(this.props.error) : null }
            </div>
        );
    }
}

