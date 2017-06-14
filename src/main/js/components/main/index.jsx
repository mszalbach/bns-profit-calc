import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Crafting from "../crafting/index";
import Prices from "../prices/index";

import "./main.css";

export default class Main extends React.Component {
    render() {
        return (
                <Switch>
                    <Route path="/crafting" component={Crafting}/>
                    <Route path="/prices" component={Prices}/>
                    <Redirect from='/' to='/crafting'/>
                </Switch>
        )
    }
}