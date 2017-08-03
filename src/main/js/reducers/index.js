import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import crafting from "./crafting";
import prices from "./prices";
import items from "./items";
import serverStatus from "./server_status";
import region from "./region";

export default combineReducers( {
                                    region,
                                    serverStatus,
                                    crafting,
                                    prices,
                                    items,
                                    routing: routerReducer
                                } );