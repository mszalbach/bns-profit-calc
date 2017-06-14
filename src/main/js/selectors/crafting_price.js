import {createSelector} from "reselect";
import {allItemNamesSelector, craftSelector} from "./crafting";
import {getPriceForItemSelector, getPricesSelector} from "./prices";

export const totalCraftingCostSelector = createSelector( [craftSelector, getPricesSelector], ( craft, prices ) => {
    let craftingCost = craft.cost ? craft.cost : 0;

    return craft.ingredients.reduce( ( acc, ingredient ) => {
        return acc + (getPriceForItem( ingredient.name, prices ) * ingredient.quantity);
    }, craftingCost );
} );

export const profitSelector = createSelector( [craftSelector, getPriceForItemSelector, totalCraftingCostSelector],
                                              ( craft, ahPrice, totalCraftingCost ) =>
                                              (craft.quantity * ahPrice) - totalCraftingCost
);

export const getAllPricesSelector = createSelector( [allItemNamesSelector, getPricesSelector], ( items, prices ) =>
        items.map( item => {
            return {name: item, price: getPriceForItem( item, prices )}
        } )
);

function getPriceForItem( name, prices ) {
    let priceObj = prices.find( it => it.name === name );
    return priceObj ? priceObj.price : 0;
}