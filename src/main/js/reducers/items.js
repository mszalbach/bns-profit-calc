import * as axios from "axios";
import {merge} from "../utils/Arrays";

export const ITEMS_LOAD = 'items/LOAD';

const initialState = [];

export default function itemsReducer( state = initialState, action ) {
    switch ( action.type ) {
        case ITEMS_LOAD:
            return merge( state, action.items, "name" );
        default:
            return state;
    }
}

export function loadItems() {
    return function ( dispatch ) {

        axios.get( "https://api.silveress.ie/bns/v3/items" )
            .then( ( serverItems ) => {
                let items = serverItems.data.map( item => {
                    //only access images via https
                    let img = item.img ? item.img.replace( "http://", "https://" ) : "";
                    return {name: item.name, img: img}
                } );

                dispatch( {type: ITEMS_LOAD, items: items} );
            } );
    }

}





