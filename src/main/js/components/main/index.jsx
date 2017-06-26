import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Prices from "../../container/prices/index";
import CraftOverview from "../../container/craftOverview/index";

import "./main.css";
import BidPrices from "../bidPrices/bidfPrices";


export default class Main extends React.Component {
    render() {
        return (
                <Switch>
                    <Route path="/crafting" component={CraftOverview}/>
                    <Route path="/prices" component={Prices}/>
                    <Route path="/bidprices" component={BidPrices}/>
                    <Redirect from='/' to='/crafting'/>
                </Switch>
        )
    }
}