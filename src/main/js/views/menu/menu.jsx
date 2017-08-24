import React from "react";
import {Link} from "react-router-dom";
import {Menu as SMenu} from 'semantic-ui-react'

import RegionSwitcher from "./regionSwitcherContainer";
import ServerStatus from "./serverStatusContainer";


export default class Menu extends React.Component {

    render() {
        return (
            <SMenu stackable>
                <SMenu.Item header as={Link} to='/'>BnS Profit Calculator</SMenu.Item>
                <SMenu.Item as={Link} active={this.props.location.pathname === '/crafting'}
                            to='/crafting'>Crafting</SMenu.Item>
                <SMenu.Item as={Link} active={this.props.location.pathname === '/market'}
                            to='/market'>Market</SMenu.Item>
                <SMenu.Menu position='right'>
                    <SMenu.Item>
                        <RegionSwitcher/>
                    </SMenu.Item>
                    <SMenu.Item>
                        <ServerStatus/>
                    </SMenu.Item>
                </SMenu.Menu>
            </SMenu>
        )
    }
}