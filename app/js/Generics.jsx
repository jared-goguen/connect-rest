import React from 'react';
import * as utility from './utility';

import TextField from 'material-ui/TextField';

class HintTextField extends React.Component {
	/*
	props
		name: string
	*/
	constructor(props) {
		super(props);
	}

	render() {
		return (
		    <TextField
                hintText={'Enter your ' + utility.toTitleCase(this.props.name)}
                floatingLabelText={utility.toTitleCase(this.props.name)}
                {...this.props}
            />
		);
	}
}


export { HintTextField };