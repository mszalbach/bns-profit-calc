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


        axios.get( 'https://api.silveress.ie/bns/market' ).then( response => {
                                                                     return response.data;
                                                                 }
        ).then( itemNames => {
            axios.get( "https://api.silveress.ie/bns/market/current/eu" ).then( response => {
                                                                                    let serverPrices = response.data;
                                                                                    let prices = itemNames.map( item => {
                                                                                        return {name: item.Name, price: serverPrices.find( price => price.ID === item.ID ).ItemPrice}
                                                                                    } ).filter( item => item.price > 0 );

                                                                                    dispatch( {type: PRICES_LOAD, items: prices} );
                                                                                }
            )
        } );
    }

}


export function mergePrice( name, price ) {
    return {type: PRICES_LOAD, items: [{name: name, price: price}]};
}


export function clearPrices() {
    return {type: PRICES_CLEAR}
}





