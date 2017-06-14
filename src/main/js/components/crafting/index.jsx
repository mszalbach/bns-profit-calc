import React from "react";
import CraftView from "../../container/craftView/index";
import CraftOverview from "../../container/craftOverview/index";
import {Route, Switch} from "react-router-dom";

import "./crafting.css";

export default class Crafting extends React.Component {
    render() {
        return (
                <div>
                    <div className="craft-overview">
                        <CraftOverview />
                    </div>
                    <div className="craft-details">
                        <Switch>
                            <Route path="/crafting/:craft" component={UrlCraftSelector}/>
                        </Switch>
                    </div>
                </div>
        )
    }
}

class UrlCraftSelector extends React.Component {
    render() {
        let {match} = this.props;
        return (
                <CraftView name={match.params.craft}/>
        )
    }
}