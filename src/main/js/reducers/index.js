import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import crafting from "./crafting";
import prices from "./prices";
import items from "./items";

export default combineReducers( {
                                    crafting,
                                    prices,
                                    items,
                                    routing: routerReducer
                                } );