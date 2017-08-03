import {
    getAllPricesSelector,
    getCraftingWithTotalCraftingCostSelector
} from "../../../../main/js/modules/craftingPrice/craftingPriceSelector";

const testState = {
    "recipes": [
        {
            "name": "Premium Kaolin Refiner",
            "profession": "Merry Potter",
            "cost": 400,
            "quantity": 5,
            "ingredients": [
                {"name": "Soulstone", "quantity": 1},
                {"name": "Kaolin Refiner", "quantity": 2}
            ]
        }]
};

describe( 'Crafting_Price Selector', () => {
    it( 'should return list with names and prices', () => {
        expect(
            getAllPricesSelector.resultFunc( ['Premium Kaolin Refiner', 'Silverfrost Transformation Stone'],
                                             [{
                                                 name: 'Premium Kaolin Refiner',
                                                 "listings": [{"price": 5, "count": 1}]
                                             }] ) ).toEqual(
            [{name: 'Premium Kaolin Refiner', price: 5}, {name: 'Silverfrost Transformation Stone', price: 0}] )
    } );

    it( 'should calculate total crafting cost', () => {
        expect(
            getCraftingWithTotalCraftingCostSelector.resultFunc( testState.recipes,
                                                                 [{
                                                                     name: 'Soulstone',
                                                                     "listings": [{"price": 5, "count": 1}]
                                                                 }, {
                                                                     name: "Kaolin Refiner",
                                                                     "listings": [{"price": 2, "count": 1}]
                                                                 }] )[0].totalCraftingCost ).toEqual( 409
        )
    } );


} );