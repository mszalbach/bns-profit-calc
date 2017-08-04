import {getPricesUrlSelector} from "../region/regionSelector";

export const LOADING_PRICES_FROM_SERVER = 'prices/LOADING';
export const LOADED_PRICES_FROM_SERVER = 'prices/LOADED';
export const ERROR_PRICES_FROM_SERVER = 'prices/ERROR';

export const PRICES_URL = '/market/{region}/current/all';

const initialState = [];

export default function pricesReducer( state = initialState, action ) {
    switch ( action.type ) {
        case LOADED_PRICES_FROM_SERVER:
            return JSON.stringify( action.items ) === JSON.stringify( state ) ? state : action.payload.data;
        default:
            return state;
    }
}

export function loadPrices() {

    return function ( dispatch, getState ) {
        let url = getPricesUrlSelector( getState() );
        dispatch( {
                      types: [LOADING_PRICES_FROM_SERVER, LOADED_PRICES_FROM_SERVER, ERROR_PRICES_FROM_SERVER],
                      payload: {
                          request: {
                              url: url
                          }
                      }
                  } )

    }
}





