import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';


const titleStyle = {
    paddingLeft: '10px'
};

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    mapItem = (partial) => (item, index) => (
        <FlatButton key={index} onClick={item.click} label={item.name} {...partial} />
    );

    render() {

        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle text="connect" style={titleStyle} />
                    {this.props.navItems.map(this.mapItem({primary: true}))}
                </ToolbarGroup>
                <ToolbarGroup>
                    {this.props.loginItems.map(this.mapItem({secondary: true}))}
                </ToolbarGroup>
            </Toolbar>
        );
    }
}