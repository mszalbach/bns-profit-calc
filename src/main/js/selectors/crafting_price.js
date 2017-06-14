import {createSelector} from "reselect";
import {allCraftsSelector, allItemNamesSelector} from "./crafting";
import {getPricesSelector} from "./prices";

export const getAllPricesSelector = createSelector( [allItemNamesSelector, getPricesSelector], ( items, prices ) =>
        items.map( item => {
            return {name: item, price: getPriceForItem( item, prices )}
        } )
);

export const getCraftingWithTotalCraftingCostSelector = createSelector( [allCraftsSelector, getPricesSelector],
                                                                        ( crafts, prices ) =>
                                                                                crafts.map( craft => {
                                                                                    craft.totalCraftingCost = getTotalCraftingCosts(
                                                                                            craft, prices );
                                                                                    return craft;
                                                                                } )
);

export const getCraftingWithProfitSelector = createSelector(
        [getCraftingWithTotalCraftingCostSelector, getPricesSelector], ( crafts, prices ) => crafts.map( craft => {
            craft.profit = (craft.quantity * getPriceForItem( craft.name, prices ) - craft.totalCraftingCost);
            return craft;
        } ) );

function getPriceForItem( name, prices ) {
    let priceObj = prices.find( it => it.name === name );
    return priceObj ? priceObj.price : 0;
}

function getTotalCraftingCosts( craft, prices ) {
    let craftingCost = craft.cost ? craft.cost : 0;

    return craft.ingredients.reduce( ( acc, ingredient ) => {
        return acc + (getPriceForItem( ingredient.name, prices ) * ingredient.quantity);
    }, craftingCost );
}