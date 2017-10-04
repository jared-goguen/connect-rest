import React from 'react';
import { Form, Input, Label } from 'semantic-ui-react'

const divStyle = {
    marginBottom: 10
}

const labelStyle = {
    width: 100
}

const labelMaker = (content) => <Label content={content} style={labelStyle} />;

export const LabeledInput = (props) => {
    let {label, name, placeholder, type, change} = props;
    return (
        <div style={divStyle}>
            <Form.Input 
                name={name} 
                placeholder={placeholder}
                onChange={change}
                type={type}
                as={() => <Input label={labelMaker(label)} /> }
            /> 
        </div>
    );
};

