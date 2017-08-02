import {createSelector} from "reselect";

export const getItemsSelector = ( state ) => state.items;

export const getSortedItemsSelector = createSelector( [getItemsSelector], ( items ) => items.sort(
    ( a, b ) => a.name.localeCompare( b.name, undefined, {numeric: true} ) ) );

export const getImageForItemSelector = createSelector( [getItemsSelector, ( _, props ) => props.name],
                                                       ( items, name ) => {
                                                           let item = items.find( item => item.name === name );
                                                           return item ? item.img : null;
                                                       } );