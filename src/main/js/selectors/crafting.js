import {createSelector} from "reselect";

export const allCraftsSelector = ( state, props ) => state.crafting.recipes;

const allCraftsNameSelector = createSelector( [allCraftsSelector],
                                              ( crafts ) => crafts.map( craft => craft.name ) );

const allIngredientNamesSelector = createSelector( [allCraftsSelector], ( crafts ) => {
    let ingredientsNames = crafts.map(
            craft => craft.ingredients.map( ingredient => ingredient.name ) );
    let flattenIngredientsNames = [].concat.apply( [], ingredientsNames );
    return [...new Set( flattenIngredientsNames )];
} );

export const allItemNamesSelector = createSelector( [allCraftsNameSelector, allIngredientNamesSelector],
                                                    ( craftNames, ingredientNames ) =>
                                                            [...new Set( craftNames.concat( ingredientNames ) )]
);
