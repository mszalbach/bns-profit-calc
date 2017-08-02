import * as axios from "axios";
import {
    ERROR_FROM_SERVER,
    ERROR_ITEMS_FROM_SERVER,
    LOADED_FROM_SERVER,
    LOADED_ITEMS_FROM_SERVER,
    LOADING_FROM_SERVER,
    LOADING_ITEMS_FROM_SERVER
} from "./server_status";

export const ITEMS_LOAD = 'items/LOAD';

export const ITEMS_URL = "https://api.silveress.ie/bns/v3/items";

const initialState = [];

export default function itemsReducer( state = initialState, action ) {
    switch ( action.type ) {
        case ITEMS_LOAD:
            return action.items;
        default:
            return state;
    }
}

export function loadItems() {
    return function ( dispatch ) {
        dispatch( {type: LOADING_ITEMS_FROM_SERVER} );
        axios.get( ITEMS_URL )
            .then( ( serverItems ) => {
                let items = serverItems.data.map( item => {
                    //only access images via https
                    let img = item.img ? item.img.replace( "http://", "https://" ) : "";
                    return {name: item.name, img: img}
                } );
                dispatch( {type: ITEMS_LOAD, items: items} );
                dispatch( {type: LOADED_ITEMS_FROM_SERVER} );
            } ).catch( error => {
            dispatch( {type: ERROR_ITEMS_FROM_SERVER} )
        } );
    }

}





