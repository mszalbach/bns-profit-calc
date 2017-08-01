import {createSelector} from "reselect";

export const getItemsSelector = ( state ) => state.items;

export const getImageForItemSelector = createSelector( [getItemsSelector, ( _, props ) => props.name],
                                                       ( items, name ) => {
                                                           let item = items.find( item => item.name === name );
                                                           return item ? item.img : null;
                                                       } );