import {createSelector} from "reselect";
import {getPriceForItem, getPrices} from "./prices";
import {initialCraftingState} from "./crafting_state";

const initialState = initialCraftingState;


export default function craftingReducer( state = initialState, action ) {
    switch ( action.type ) {
        default:
            return state;
    }
}

export const allCrafts = ( state, props ) => state.crafting.recipes;

export const craftSelector = ( state, props ) => state.crafting.recipes.find( recipe => recipe.name === props.name );


export const totalCraftingCostSelector = createSelector( [craftSelector, getPrices], ( craft, prices ) => {
    let craftingCost = craft.cost ? craft.cost : 0;

    return craft.ingredients.reduce( ( acc, ingredient ) => {
        let priceObj = prices.find( it => it.name === ingredient.name );
        let price = priceObj ? priceObj.price : 0;
        return acc + (price * ingredient.quantity);
    }, craftingCost );
} );

export const profitSelector = createSelector( [craftSelector, getPriceForItem, totalCraftingCostSelector],
                                              ( craft, ahPrice, totalCraftingCost ) => {
                                                  return (craft.quantity * ahPrice) - totalCraftingCost
                                              } );



