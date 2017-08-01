import * as axios from "axios";

export const PRICES_CLEAR = 'prices/CLEAR';
export const PRICES_LOAD = 'prices/LOAD';

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
        axios.get( "https://api.silveress.ie/bns/v3/market/eu/current/all" )
            .then( ( serverPrices ) => {
                let prices = serverPrices.data.map( item => {
                    return {name: item.name, listings: item.listings}
                } );

                dispatch( {type: PRICES_LOAD, items: prices} );
            } );
    }

}

export function clearPrices() {
    return {type: PRICES_CLEAR}
}





