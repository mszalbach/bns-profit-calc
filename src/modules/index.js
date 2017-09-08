import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import crafting from "./crafting/craftingReducer";
import {reducer as toastrReducer} from "react-redux-toastr";
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
                                    toastr: toastrReducer,
                                    routing: routerReducer
                                } );