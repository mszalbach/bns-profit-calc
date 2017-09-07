import {getCraftingWithTotalCraftingCostSelector} from "./craftingPriceSelector";

const testState = [
        {
            "name": "Premium Kaolin Refiner",
            "createdBy": "Merry Potter",
            "cost": 400,
            "output": 5,
            "ingredients": [
                {"name": "Soulstone", "quantity": 1},
                {"name": "Kaolin Refiner", "quantity": 2}
            ]
        }];

describe( 'Crafting_Price Selector', () => {

    it( 'should calculate total crafting cost', () => {
        expect(
            getCraftingWithTotalCraftingCostSelector.resultFunc( testState,
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