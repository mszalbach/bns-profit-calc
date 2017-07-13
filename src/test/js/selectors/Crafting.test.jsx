import {
    allCraftsNameSelector,
    allIngredientNamesSelector,
    allItemNamesSelector
} from "../../../main/js/selectors/crafting";

const testState = {
    "recipes": [
        {
            "name": "Premium Kaolin Refiner",
            "profession": "Merry Potter",
            "cost": 432,
            "quantity": 5,
            "ingredients": [
                {"name": "Soulstone", "quantity": 8},
                {"name": "Kaolin Refiner", "quantity": 5}
            ]
        },
        {
            "name": "Silverfrost Transformation Stone",
            "profession": "Soul Wardens",
            "cost": 432,
            "quantity": 10,
            "ingredients": [
                {"name": "Soulstone", "quantity": 250},
                {"name": "Silverfrost Quartz", "quantity": 5}
            ]
        }]
};

describe( 'Crafting Selector', () => {
    it( 'should return all crafting names', () => {
        expect(
            allCraftsNameSelector.resultFunc( testState.recipes ) ).toEqual(
            ['Premium Kaolin Refiner', 'Silverfrost Transformation Stone'] )
    } );

    it( 'should return all ingredient names', () => {
        expect(
            allIngredientNamesSelector.resultFunc( testState.recipes ) ).toEqual(
            ['Soulstone', 'Kaolin Refiner', 'Silverfrost Quartz'] )
    } );
    it( 'should merge item names', () => {
        expect(
            allItemNamesSelector.resultFunc( ['Premium Kaolin Refiner', 'Soulstone'], ['Soulstone'] ) ).toEqual(
            ['Premium Kaolin Refiner', 'Soulstone'] )
    } );


} );