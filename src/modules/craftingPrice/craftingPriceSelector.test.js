import {
    getCraftingWithBestProfitSelector,
    getCraftingWithProfitSelector,
    getCraftingWithTotalCraftingCostSelector
} from "./craftingPriceSelector";

const testState = [{
    "item": "Silverfrost Transformation Stone",
    "createdBy": "Forgekeepers",
    "orders": [
        {
            "duration": "1h",
            "cost": 10,
            "output": 6,
            "ingredients": [
                {"name": "Moonstone", "quantity": 1},
                {"name": "Sacred Orbs", "quantity": 2}
            ]
        },
        {
            "duration": "2h",
            "cost": 20,
            "output": 15,
            "ingredients": [
                {"name": "Moonstone", "quantity": 2},
                {"name": "Sacred Orbs", "quantity": 3}
            ]
        },
        {
            "duration": "3h",
            "cost": 40,
            "output": 35,
            "ingredients": [
                {"name": "Moonstone", "quantity": 3},
                {"name": "Sacred Orbs", "quantity": 4}
            ]
        }
    ]
}
];

const testPrices = [
    {
        name: 'Moonstone',
        "listings": [{
            "price": 5,
            "count": 1
        }]
    },
    {
        name: "Sacred Orbs",
        "listings": [{
            "price": 2,
            "count": 1
        }]
    },
    {
        name: "Silverfrost Transformation Stone",
        "listings": [{
            "price": 5,
            "count": 1
        }]
    }
];

describe
( 'New Crafting_Price Selector', () => {

    it( 'should calculate total crafting cost for each order', () => {

        const craftingsWithTotalCraftingCost = getCraftingWithTotalCraftingCostSelector.resultFunc( testState,
                                                                                                    testPrices );

        expect( craftingsWithTotalCraftingCost[0].orders[0].totalCraftingCost ).toEqual( 19 );
        expect( craftingsWithTotalCraftingCost[0].orders[1].totalCraftingCost ).toEqual( 36 );
        expect( craftingsWithTotalCraftingCost[0].orders[2].totalCraftingCost ).toEqual( 63 );
    } );

    it( 'should calculate profit for each order', () => {

        testState[0].orders[0].totalCraftingCost = 10;
        testState[0].orders[1].totalCraftingCost = 20;
        testState[0].orders[2].totalCraftingCost = 30;

        const craftingsWithProfit = getCraftingWithProfitSelector.resultFunc( testState,
                                                                              testPrices );


        expect( craftingsWithProfit[0].orders[0].profit ).toEqual( 20 );
        expect( craftingsWithProfit[0].orders[0].profitPerItem ).toBeCloseTo( 3.33 );
        expect( craftingsWithProfit[0].orders[1].profit ).toEqual( 55 );
        expect( craftingsWithProfit[0].orders[1].profitPerItem ).toBeCloseTo( 3.67 );
        expect( craftingsWithProfit[0].orders[2].profit ).toEqual( 145 );
        expect( craftingsWithProfit[0].orders[2].profitPerItem ).toBeCloseTo( 4.14 );
    } );

    it( 'should calculate best profit for each order', () => {

        testState[0].orders[0].totalCraftingCost = 10;
        testState[0].orders[1].totalCraftingCost = 20;
        testState[0].orders[2].totalCraftingCost = 30;

        const craftingsWithProfit = getCraftingWithProfitSelector.resultFunc( testState,
                                                                              testPrices );

        const craftingsWithBestProfit = getCraftingWithBestProfitSelector.resultFunc( craftingsWithProfit );


        expect( craftingsWithBestProfit[0].bestProfit ).toEqual( 145 );

    } );

} );