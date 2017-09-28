import React from 'react';
import { withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Left from 'material-ui/svg-icons/navigation/chevron-left';
import Right from 'material-ui/svg-icons/navigation/chevron-right';
import Divider from 'material-ui/Divider';

const buttonStyle = {
    marginLeft: -20,
    float: 'left',
    display: 'inline',
    position: 'absolute',
    zIndex: 1400, // Drawer is 1300
};

const width = 150;

class NavDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    mapItem = (item, index) => (
        <MenuItem 
            key={index} 
            onClick={() => this.props.history.push(item.path)} 
            primaryText={item.name}
        />
    );

    render() {
        let updatedButtonStyle = {...buttonStyle, left: this.state.open ? width : 0};

        return (
            <div>
                <FloatingActionButton secondary={this.state.open} onClick={this.handleToggle} style={updatedButtonStyle}>
                    { this.state.open ? <Left /> : <Right /> }
                </FloatingActionButton>
                <Drawer width={width} open={this.state.open}>
                    {this.props.navItems.map(this.mapItem)}
                    <Divider />
                    {this.props.loginItems.map(this.mapItem)}
                </Drawer>

            </div>
        );
    }
}

export default withRouter(NavDrawer);