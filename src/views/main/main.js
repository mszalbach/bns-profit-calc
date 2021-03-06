import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {routing} from "./routing";
import "./main.css";

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                {routing.map( route => <Route key={route.path} path={route.path} component={route.component}/> )}
                <Redirect from='/' to='/crafting'/>
            </Switch>
        )
    }
}