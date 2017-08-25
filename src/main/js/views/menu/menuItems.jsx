import React from "react";
import {Link} from "react-router-dom";
import {Container, Menu} from 'semantic-ui-react'

import RegionSwitcher from "./regionSwitcherContainer";
import ServerStatus from "./serverStatusContainer";


export default class MenuItems extends React.Component {

    render() {
        return (
            <Container fluid>
                <Menu.Item as={Link} active={this.props.location.pathname === '/crafting'}
                           to='/crafting'>Crafting</Menu.Item>
                <Menu.Item as={Link} active={this.props.location.pathname === '/market'}
                           to='/market'>Market</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <RegionSwitcher/>
                    </Menu.Item>
                    <Menu.Item>
                        <ServerStatus/>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        )
    }
}