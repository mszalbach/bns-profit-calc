import {ERROR_PRICES_FROM_SERVER, LOADED_PRICES_FROM_SERVER, LOADING_PRICES_FROM_SERVER} from "../prices/pricesReducer";
import {ERROR_ITEMS_FROM_SERVER, LOADED_ITEMS_FROM_SERVER, LOADING_ITEMS_FROM_SERVER} from "../items/itemsReducer";

const LOADED = 0;
const LOADING = 1;
const ERROR = 2;

const initialState = {
    items: {
        status: LOADING
    },
    prices: {
        status: LOADING
    }
};

export default function serverStatusReducer( state = initialState, action ) {
    switch ( action.type ) {
        case LOADING_ITEMS_FROM_SERVER:
            return {
                ...state,
                items: {
                    status: LOADING
                },
            };
        case LOADED_ITEMS_FROM_SERVER:
            return {
                ...state,
                items: {
                    status: LOADED
                },
            };
        case ERROR_ITEMS_FROM_SERVER:
            return {
                ...state,
                items: {
                    status: ERROR
                }
            };
        case LOADING_PRICES_FROM_SERVER:
            return {
                ...state,
                prices: {
                    status: LOADING
                }
            };
        case LOADED_PRICES_FROM_SERVER:
            return {
                ...state,
                prices: {
                    status: LOADED
                }

            };
        case ERROR_PRICES_FROM_SERVER:
            return {
                ...state,
                prices: {
                    status: ERROR,
                    error: action.error
                }
            };
        default:
            return state;
    }
}





