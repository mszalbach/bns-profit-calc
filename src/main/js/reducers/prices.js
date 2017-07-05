import {createClient} from "../config/client";
import {merge} from "../utils/Arrays";

const PRICE_ADD = 'price/ADD';
const PRICE_CHANGE = 'price/CHANGE';
const PRICES_CLEAR = 'prices/CLEAR';
const PRICES_LOAD = 'prices/LOAD';

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
        return createClient()( {
                                   method: 'GET',
                                   path: "http://api.silveress.ie/bns/market/EU.json"
                               } ).then( response => {
            let serverPrices = response.entity.filter( item => item.ItemPrice > 0 ).map( item => {
                return {name: item.Name, price: item.ItemPrice};
            } );
            dispatch( {type: PRICES_LOAD, items: serverPrices} );
                                         }
        );

    }

}


export function mergePrice( name, price ) {
    return {type: PRICES_LOAD, items: [{name: name, price: price}]};
}


export function clearPrices() {
    return {type: PRICES_CLEAR}
}





