import {getPriceFor} from "./prices";
const initialState = {
    recipes: [
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

export const craftSelector = ( state, props ) => state.crafting.recipes.find( recipe => recipe.name === props.craft );

export function getTotalCraftCost( state, props ) {
    let craftName = props.craft;
    let craft = state.crafting.recipes.find( recipe => recipe.name === craftName );
    let craftCost = craft ? craft.cost : 0;

    if ( craft ) {
        craft.ingredients.forEach(
                ingredient => craftCost += ingredient.quantity * getPriceFor( state, ingredient.name ) );
    }

    return craftCost;
}



