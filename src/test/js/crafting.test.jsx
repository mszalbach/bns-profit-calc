import {getTotalCraftCost} from "reducers/crafting";

describe( 'getTotalCraftCost', () => {
    it( 'should calculate crafting cost', () => {
        let state = {
            "crafting": {
                "recipes": [
                    {
                        "name": "Premium Kaolin Refiner",
                        "cost": 3,
                        "ingredients": [
                            {"name": "Soulstone", "quantity": 2},
                            {"name": "Kaolin Refiner", "quantity": 1},
                        ]
                    }
                ]
            },
            "prices": {
                "items": [
                    {"name": "Soulstone", "price": 1},
                    {"name": "Kaolin Refiner", "price": 2},


                ]
            }

        };
        let props = {"craft": "Premium Kaolin Refiner"};
        expect( getTotalCraftCost( state, props ) ).toBe( 7 );
    } );
    it( 'should calculate unknown ingredients with 0', () => {
        let state = {
            "crafting": {
                "recipes": [
                    {
                        "name": "Premium Kaolin Refiner",
                        "cost": 3,
                        "ingredients": [
                            {"name": "Soulstone", "quantity": 2},
                            {"name": "Kaolin Refiner", "quantity": 1},
                        ]
                    }
                ],
            },
            "prices": {
                "items": [
                    {"name": "Soulstone", "price": 1}
                ]
            }

        };
        let props = {"craft": "Premium Kaolin Refiner"};
        expect( getTotalCraftCost( state, props ) ).toBe( 5 );
    } );

    it( 'should calculate unknown recipe with 0', () => {
        let state = {
            "crafting": {
                recipes: []
            }

        };
        let props = {"craft": "Premium Kaolin Refiner"};
        expect( getTotalCraftCost( state, props ) ).toBe( 0 );
    } );

} );

