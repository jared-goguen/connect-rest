import React from 'react';
import { Menu } from 'semantic-ui-react'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    mapItem = (item, index) => (
        <Menu.Item 
            key={index} 
            name={item.name} 
            onClick={item.click} 
            active={item.active}
        >
            {item.name}
        </Menu.Item>
    );

    render() {

        return (
            <Menu pointing secondary size='large'>
                {this.props.navItems.map(this.mapItem)}
                <Menu.Menu position='right'>
                    {this.props.loginItems.map(this.mapItem)}
                </Menu.Menu>
            </Menu>
        );
    }
}