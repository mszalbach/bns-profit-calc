import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import crafting from "./crafting";

export default combineReducers( {
                                    crafting,
                                    routing: routerReducer
                                } );