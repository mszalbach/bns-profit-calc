import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import crafting from "./crafting/craftingReducer";
import prices from "./prices/pricesReducer";
import items from "./items/itemsReducer";
import serverStatus from "./serverStatus/serverStatusReducer";
import region from "./region/regionReducer";

export default combineReducers( {
                                    region,
                                    serverStatus,
                                    prices,
                                    crafting,
                                    items,
                                    routing: routerReducer
                                } );