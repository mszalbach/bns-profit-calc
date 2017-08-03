import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import CraftOverview from "../crafting/craftOverviewContainer";
import BidPrices from "../bidprices/bidPrices";
import MarketOverview from "../market/marketOverview";
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