export const LOADING_ITEMS_FROM_SERVER = 'server/items/LOADING';
export const LOADED_ITEMS_FROM_SERVER = 'server/items/LOADED';
export const ERROR_ITEMS_FROM_SERVER = 'server/items/ERROR';

export const LOADING_PRICES_FROM_SERVER = 'server/prices/LOADING';
export const LOADED_PRICES_FROM_SERVER = 'server/prices/LOADED';
export const ERROR_PRICES_FROM_SERVER = 'server/prices/ERROR';

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





