import React from "react";
import {Link} from "react-router-dom";
import {Menu as SMenu} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import RegionSwitcher from "./regionSwitcherContainer";
import ServerStatus from "./serverStatusContainer";


export default class Menu extends React.Component {

    render() {
        return (
            <SMenu>
                <SMenu.Item header as={Link} to='/'>
                    BnS Profit Calculator
                </SMenu.Item>
                <SMenu.Item as={Link} to='/crafting'>
                    Crafting
                </SMenu.Item>
                <SMenu.Item as={Link} to='/market'>
                    Market
                </SMenu.Item>
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