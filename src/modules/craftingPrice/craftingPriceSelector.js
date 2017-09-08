import {createSelector} from "reselect";
import {allCraftsSelector} from "../crafting/craftingSelector";
import {getPriceForItem, getPricesSelector} from "../prices/pricesSelector";

export const getCraftingWithTotalCraftingCostSelector = createSelector( [allCraftsSelector, getPricesSelector],
                                                                        ( crafts, prices ) => {
                                                                            //using a clone so reselect sees changes to the selector
                                                                            let cloneCrafts = Object.assign( [],
                                                                                                             crafts );
                                                                            cloneCrafts.forEach(
                                                                                craft => craft.orders.forEach(
                                                                                    order => {
                                                                                        order.totalCraftingCost = getTotalCraftingCosts(
                                                                                            order, prices )
                                                                                    } ) );
                                                                            return cloneCrafts;
                                                                        } );


export const getCraftingWithProfitSelector = createSelector(
    [getCraftingWithTotalCraftingCostSelector, getPricesSelector],
    ( crafts, prices ) => {
        crafts.forEach( craft => craft.orders.forEach( order => {
            order.profit = (order.output * getPriceForItem( craft.item, prices ) - order.totalCraftingCost);
        } ) );
        return crafts;
    } );

export const getCraftingWithBestProfitSelector = createSelector( [getCraftingWithProfitSelector],
                                                                 ( crafts ) => {
                                                                     crafts.forEach( craft => {
                                                                         craft.bestProfit = Math.max.apply( Math,
                                                                                                            craft.orders.map(
                                                                                                                order => order.profit ) );
                                                                     } );
                                                                     return crafts;
                                                                 } );

export const getOneCraftingWithProfitSelector = createSelector(
    [getCraftingWithProfitSelector, ( _, props ) => props.name],
    ( crafts, name ) => crafts.find( craft => craft.item === name ) );


function getTotalCraftingCosts( order, prices ) {
    let craftingCost = order.cost ? order.cost : 0;

    return order.ingredients.reduce( ( acc, ingredient ) => {
        return acc + (getPriceForItem( ingredient.name, prices ) * ingredient.quantity);
    }, craftingCost );
}