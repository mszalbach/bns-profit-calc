import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import CraftOverview from "../../container/craftOverview";
import BidPrices from "../bidPrices";
import MarketOverview from "../marketOverview";
import "./main.css";

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/crafting" component={CraftOverview}/>
                <Route path="/bidprices" component={BidPrices}/>
                <Route path="/market" component={MarketOverview}/>
                <Redirect from='/' to='/crafting'/>
            </Switch>
        )
    }
}