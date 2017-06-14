import {createSelector} from "reselect";
export const getPricesSelector = ( state ) => state.prices;

export const getPriceForItemSelector = createSelector( [getPricesSelector, ( _, props ) => props.name],
                                                       ( prices, name ) => {
                                                           let item = prices.find( item => item.name === name );
                                                           return item ? item.price : 0;
                                                       } );