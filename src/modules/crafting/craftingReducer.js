import {initialCraftingState} from "./craftingState";

const initialState = initialCraftingState;


export default function craftingReducer( state = initialState, action ) {
    switch ( action.type ) {
        default:
            return state;
    }
}



