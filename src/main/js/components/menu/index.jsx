import React from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default class Menu extends React.Component {

    render() {
        return (
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">
                                BnS Profit Calculator
                            </Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to="/crafting">
                            <NavItem>Crafting</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/prices">
                            <NavItem>Prices</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
        )
    }
}