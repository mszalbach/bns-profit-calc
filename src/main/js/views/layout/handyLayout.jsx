import React from "react";
import {Button, Menu, Segment, Sidebar} from "semantic-ui-react";
import Main from "../main/main";
import MenuItems from "../menu/menuItemsContainer";
import {Link} from "react-router-dom";

export default class HandyLayout extends React.Component {

    state = {visible: false};

    toggleVisibility = () => this.setState( {visible: !this.state.visible} );

    render() {
        return (
            <div>
                <Menu>
                    <Menu.Item>
                        <Button basic onClick={this.toggleVisibility} icon="content"/>
                    </Menu.Item>
                    <Menu.Item header as={Link} to='/'>BnS Profit Calculator</Menu.Item>
                </Menu>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='push' width='thin' visible={this.state.visible} vertical>
                        <MenuItems/>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Main/>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    };
}
