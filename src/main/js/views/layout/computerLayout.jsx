import React from "react";
import Main from "../main/main";
import MenuItems from "../menu/menuItemsContainer";
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class ComputerLayout extends React.Component {

    render() {
        return ( <div>
                <Menu stackable>
                    <Menu.Item header as={Link} to='/'>BnS Profit Calculator</Menu.Item>
                    <MenuItems/>
                </Menu>
                <Main/>
            </div>

        )
    };
}
