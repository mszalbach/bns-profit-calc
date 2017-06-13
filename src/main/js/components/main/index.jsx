import React from "react";
import CraftView from "../../container/craftView/index";
import CraftOverview from "../../container/craftOverview/index";
import {Route, Switch} from "react-router-dom";

import "./main.css";

export default class Main extends React.Component {
    render() {
        return (
                <div>
                    <div className="craft-overview">
                        <CraftOverview />
                    </div>
                    <div className="craft-details">
                        <Switch>
                            <Route path="/:craft" name="Premium Kaolin Refiner" component={UrlCraftSelector}/>
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