import {createSelector} from "reselect";

export const getPricesSelector = ( state ) => state.prices;

export const getPriceForItemSelector = createSelector( [getPricesSelector, ( _, props ) => props.name],
                                                       ( prices, name ) => {

                                                           return getPriceForItem( name, prices );
                                                       } );

export const getListingsForItemSelector = createSelector( [getPricesSelector, ( _, props ) => props.name],
                                                          ( prices, name ) => {
                                                              let priceObj = prices.find( it => it.name === name );
                                                              if ( priceObj ) {
                                                                  return priceObj.listings.map( listing => {
                                                                      return {
                                                                          name: name,
                                                                          itemPrice: getPriceForItem( name, prices ),
                                                                          ...listing
                                                                      }
                                                                  } )
                                                              }
                                                              return [];
                                                          } );

export function getPriceForItem( name, prices ) {
    let priceObj = prices.find( it => it.name === name );
    let firstPriceObj = priceObj ? priceObj.listings[0] : {price: 0, count: 1};
    return firstPriceObj.price / firstPriceObj.count;
}