import {enrichedCraftSelector} from "reducers/crafting";

describe( 'enrichedCraftSelector', () => {
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
        expect( (enrichedCraftSelector( state, props ) ).craftingCost ).toBe( 7 );
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
        expect( (enrichedCraftSelector( state, props ) ).craftingCost ).toBe( 5 );
    } );

    it( 'should add prices for ingredients', () => {
        let state = {
            "crafting": {
                "recipes": [
                    {
                        "name": "Premium Kaolin Refiner",
                        "cost": 3,
                        "ingredients": [
                            {"name": "Soulstone", "quantity": 2},
                        ]
                    }
                ]
            },
            "prices": {
                "items": [
                    {"name": "Soulstone", "price": 5},
                ]
            }

        };
        let props = {"craft": "Premium Kaolin Refiner"};
        expect( (enrichedCraftSelector( state, props ) ).ingredients[0].price ).toBe( 5 );
    } );

} );

