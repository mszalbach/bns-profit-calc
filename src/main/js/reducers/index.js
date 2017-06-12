import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import crafting from "./crafting";
import prices from "./prices";

export default combineReducers( {
                                    crafting,
                                    prices,
                                    routing: routerReducer
                                } );