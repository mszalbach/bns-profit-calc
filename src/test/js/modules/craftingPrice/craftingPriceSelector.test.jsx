import {getCraftingWithTotalCraftingCostSelector} from "../../../../main/js/modules/craftingPrice/craftingPriceSelector";

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