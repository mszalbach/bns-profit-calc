import React from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import ServerStatus from "../../container/serverStatus";
import RegionSwitcher from "../../container/regionSwitcher";

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
                    <LinkContainer to="/market">
                        <NavItem>Market</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/bidprices">
                        <NavItem>Bid Prices</NavItem>
                    </LinkContainer>
                </Nav>
                <Nav pullRight>
                    <ServerStatus/>
                </Nav>
                <Nav pullRight>
                    <RegionSwitcher/>
                </Nav>
            </Navbar>
        )
    }
}