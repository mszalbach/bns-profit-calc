import {createClient} from "../config/client";
const PRICE_ADD = 'price/ADD';
const PRICE_CHANGE = 'price/CHANGE';
const PRICES_CLEAR = 'prices/CLEAR';

const initialState = [];

export default function pricesReducer( state = initialState, action ) {
    switch ( action.type ) {
        case PRICE_ADD:
            return [
                ...state,
                {
                    name: action.name,
                    price: action.price
                }
            ];
        case PRICE_CHANGE:
            let index = state.findIndex( item => item.name === action.name );
            state[index].price = action.price;
            return state.slice( 0 );
        case PRICES_CLEAR:
            return [];
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
                                             dispatch( updatePrices( response.entity ) );
                                         }
        );

    }

}

export function updatePrices( prices ) {
    return function ( dispatch ) {
        prices.filter( item => item.ItemPrice > 0 ).map( item => {
            dispatch( mergePrice( item.Name, item.ItemPrice ) );
        } );
    }

}


export function mergePrice( name, price ) {
    return function ( dispatch, getState ) {
        if ( getState().prices.find( item => item.name === name ) ) {
            dispatch( changePrice( name, price ) );
        } else {
            dispatch( addPrice( name, price ) )
        }
    }
}


function changePrice( name, price ) {
    return {type: PRICE_CHANGE, name: name, price: Number( price )}
}

function addPrice( name, price ) {
    return {type: PRICE_ADD, name: name, price: Number( price )}
}

export function clearPrices() {
    return {type: PRICES_CLEAR}
}





