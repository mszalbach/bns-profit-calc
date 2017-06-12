import {createSelector} from "reselect";
import {getPrices} from "./prices";
const initialState = {
    "recipes": [
        {
            "name": "Premium Kaolin Refiner",
            "cost": 400,
            "quantity": 5,
            "ingredients": [
                {"name": "Soulstone", "quantity": 8},
                {"name": "Kaolin Refiner", "quantity": 5},
                {"name": "Silverfrost Quartz", "quantity": 5},
                {"name": "Squio Sap", "quantity": 1},
                {"name": "Thight Meat", "quantity": 1}
            ]
        }
    ]
};

export default function craftingReducer( state = initialState, action ) {
    switch ( action.type ) {
        default:
            return state;
    }
}

const craftSelector = ( state, props ) => state.crafting.recipes.find( recipe => recipe.name === props.name );


export const craftingCostSelector = createSelector( [craftSelector, getPrices], ( craft, prices ) => {
    craft.craftingCost = 0;

    craft.ahPrice = prices.find( item => item.name === craft.name ).price;
    craft.ingredients.forEach(
            ingredient => {
                let price = prices.find( it => it.name === ingredient.name ).price;
                craft.ingredients.find( it => it.name === ingredient.name ).price = price;
                craft.craftingCost += price * ingredient.quantity;

            } );
    return craft;
} );




