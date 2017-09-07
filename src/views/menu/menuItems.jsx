import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Container, Menu} from 'semantic-ui-react'

import RegionSwitcher from "./regionSwitcherContainer";
import ServerStatus from "./serverStatusContainer";
import {routing} from "../main/routing";


export default class MenuItems extends React.Component {

    static propTypes = {
        onClick: PropTypes.func
    };

    render() {
        return (
            <Container fluid>
                {routing.map(
                    route => <Menu.Item key={route.path} as={Link} onClick={this.props.onClick} to={route.path}
                                        active={this.props.location.pathname === route.path}
                    >{route.name}</Menu.Item> )}
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