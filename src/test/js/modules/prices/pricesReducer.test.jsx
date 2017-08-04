import pricesReducer, {LOADED_PRICES_FROM_SERVER} from "../../../../main/js/modules/prices/pricesReducer";

describe( 'Price Reducer', () => {
    it( 'should load single item to empty state', () => {
        expect( pricesReducer( [], {
            type: LOADED_PRICES_FROM_SERVER,
            payload: {data: [{name: "item1", price: 5}]}
        } ) ).toEqual(
            [{name: 'item1', price: 5}] )
    } );

    it( 'should overwrite item in state with new one', () => {
        expect( pricesReducer( [{name: 'item1', "listings": [{"price": 6, "count": 1}]}],
                               {
                                   type: LOADED_PRICES_FROM_SERVER,
                                   payload: {data: [{name: "item1", "listings": [{"price": 10, "count": 2}]}]}
                               } ) ).toEqual(
            [{name: 'item1', "listings": [{"price": 10, "count": 2}]}] )
    } );

} );