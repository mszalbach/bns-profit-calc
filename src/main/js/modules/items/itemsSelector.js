import {createSelector} from "reselect";

export const getItemsSelector = ( state ) => state.items;

export const getSortedItemsNamesSelector = createSelector( [getItemsSelector], ( items ) => [...new Set(
    (items.map( item => item.name )) )].sort(
    ( a, b ) => a.localeCompare( b, undefined, {numeric: true} ) ) );

export const getImageForItemSelector = createSelector( [getItemsSelector, ( _, props ) => props.name],
                                                       ( items, name ) => {
                                                           let item = items.find( item => item.name === name );
                                                           return item ? item.img : null;
                                                       } );