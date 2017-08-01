import * as axios from "axios";
import {merge} from "../utils/Arrays";

export const PRICES_CLEAR = 'prices/CLEAR';
export const PRICES_LOAD = 'prices/LOAD';

const initialState = [];

export default function pricesReducer( state = initialState, action ) {
    switch ( action.type ) {
        case PRICES_CLEAR:
            return [];
        case PRICES_LOAD:
            return merge( state, action.items, "name" );
        default:
            return state;
    }
}

export function loadPrices() {
    return function ( dispatch ) {

        axios.get( "https://api.silveress.ie/bns/v3/market/eu/current/all" )
            .then( ( serverPrices ) => {
                let prices = serverPrices.data.map( item => {
                    let firstPriceObj = item.listings[0];
                    return {name: item.name, price: firstPriceObj.price / firstPriceObj.count}
                } ).filter( item => item.price > 0 );

                dispatch( {type: PRICES_LOAD, items: prices} );
            } );
    }

}

export function mergePrice( name, price ) {
    return {type: PRICES_LOAD, items: [{name: name, price: price}]};
}


export function clearPrices() {
    return {type: PRICES_CLEAR}
}





