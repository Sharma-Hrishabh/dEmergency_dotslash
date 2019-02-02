import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react'

class Header extends Component{
    render(){
        return(
            <Menu secondary style={{marginTop: 10}}>
                <Menu.Item name='Logo' />
                <Menu.Item
                    name='messages'
                />
                <Menu.Item
                    name='friends'
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='Add'
                    />
                </Menu.Menu>
            </Menu>
        );
    }
}
export default Header;