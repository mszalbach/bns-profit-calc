import * as axios from "axios";
import {
    ERROR_FROM_SERVER,
    ERROR_PRICES_FROM_SERVER,
    LOADED_FROM_SERVER,
    LOADED_PRICES_FROM_SERVER,
    LOADING_FROM_SERVER,
    LOADING_PRICES_FROM_SERVER
} from "./server_status";

export const PRICES_CLEAR = 'prices/CLEAR';
export const PRICES_LOAD = 'prices/LOAD';

export const PRICES_URL = 'https://api.silveress.ie/bns/v3/market/eu/current/all';

const initialState = [];

export default function pricesReducer( state = initialState, action ) {
    switch ( action.type ) {
        case PRICES_CLEAR:
            return [];
        case PRICES_LOAD:
            return action.items;
        default:
            return state;
    }
}

export function loadPrices() {
    return function ( dispatch ) {
        dispatch( {type: LOADING_PRICES_FROM_SERVER} );
        axios.get( PRICES_URL )
            .then( ( serverPrices ) => {
                let prices = serverPrices.data.map( item => {
                    return {name: item.name, listings: item.listings}
                } );

                dispatch( {type: PRICES_LOAD, items: prices} );
                dispatch( {type: LOADED_PRICES_FROM_SERVER} );
            } ).catch( error => {
            dispatch( {type: ERROR_PRICES_FROM_SERVER} )
        } );
    }

}

export function clearPrices() {
    return {type: PRICES_CLEAR}
}





