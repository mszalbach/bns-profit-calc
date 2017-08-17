import {createSelector} from "reselect";
import {allCraftsSelector} from "../crafting/craftingSelector";
import {getPriceForItem, getPricesSelector} from "../prices/pricesSelector";

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
        craft.profit = (craft.output * getPriceForItem( craft.item, prices ) - craft.totalCraftingCost);
        return craft;
    } ) );


function getTotalCraftingCosts( craft, prices ) {
    let craftingCost = craft.cost ? craft.cost : 0;

    return craft.ingredients.reduce( ( acc, ingredient ) => {
        return acc + (getPriceForItem( ingredient.name, prices ) * ingredient.quantity);
    }, craftingCost );
}