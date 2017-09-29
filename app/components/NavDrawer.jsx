import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Left from 'material-ui/svg-icons/navigation/chevron-left';
import Right from 'material-ui/svg-icons/navigation/chevron-right';
import Divider from 'material-ui/Divider';

import constants from '../js/constants';

const width = constants.navWidth;

const openButtonStyle = {
    marginLeft: -20,
    float: 'left',
    display: 'inline',
    position: 'fixed',
    zIndex: 1400, // Drawer is 1300
    left: width,
    bottom: 20
};

const closedButtonStyle = {
    ...openButtonStyle,
    left: 0,
    marginLeft: 10
}

export default class NavDrawer extends React.Component {
    constructor(props) {
        super(props);
    }

    mapItem = (item, index) => (
        <MenuItem key={index} onClick={item.click} primaryText={item.name} />
    );

    render() {
        let buttonStyle = this.props.open ? openButtonStyle : closedButtonStyle;

        return (
            <div>
                <FloatingActionButton secondary={this.props.open} onClick={this.props.handleToggle} style={buttonStyle}>
                    { this.props.open ? <Left /> : <Right /> }
                </FloatingActionButton>
                <Drawer width={width} open={this.props.open}>
                    {this.props.navItems.map(this.mapItem)}
                    <Divider />
                    {this.props.loginItems.map(this.mapItem)}
                </Drawer>
            </div>
        );
    }
}