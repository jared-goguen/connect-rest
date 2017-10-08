import React from 'react';
import { Form, Input, Label } from 'semantic-ui-react'

const divStyle = {
    marginBottom: 10
}

const labelStyle = {
    width: 100
}

const labelMaker = (content) => <Label content={content} style={labelStyle} />;

export class LabeledInput extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        /* 
            this is fine unless at some point state is added or inputs 
            are reused (seems unlikely) 
        */
        return false;
    }

    render() {
        let {label, name, placeholder, type, change} = this.props;
        return (
            <div style={divStyle}>
                <Form.Input
                    as={() => <Input 
                        name={name} 
                        type={type} 
                        label={labelMaker(label)}
                        placeholder={placeholder}
                        onChange={change}
                    /> }
                /> 
            </div>
        );
    }
}

