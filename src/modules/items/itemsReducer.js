export const LOADING_ITEMS_FROM_SERVER = 'items/LOADING';
export const LOADED_ITEMS_FROM_SERVER = 'items/LOADED';
export const ERROR_ITEMS_FROM_SERVER = 'items/ERROR';

const initialState = [];

export default function itemsReducer( state = initialState, action ) {
    switch ( action.type ) {
        case LOADED_ITEMS_FROM_SERVER:
            return JSON.stringify( action.payload.data ) === JSON.stringify( state ) ? state : action.payload.data;
        default:
            return state;
    }
}

export function loadItems() {

    return {
        types: [LOADING_ITEMS_FROM_SERVER, LOADED_ITEMS_FROM_SERVER, ERROR_ITEMS_FROM_SERVER],
        payload: {
            request: {
                url: 'https://api.silveress.ie/bns/v3/items'
            }
        }
    }

}





