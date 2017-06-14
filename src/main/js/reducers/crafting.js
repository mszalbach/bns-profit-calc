import {createSelector} from "reselect";
import {initialCraftingState} from "./crafting_state";

const initialState = initialCraftingState;


export default function craftingReducer( state = initialState, action ) {
    switch ( action.type ) {
        default:
            return state;
    }
}



