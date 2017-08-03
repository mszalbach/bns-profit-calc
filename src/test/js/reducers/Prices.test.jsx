import pricesReducer, {PRICES_CLEAR, PRICES_LOAD} from "../../../main/js/reducers/prices/pricesReducer";

describe( 'Price Reducer', () => {
    it( 'should load single item to empty state', () => {
        expect( pricesReducer( [], {type: PRICES_LOAD, items: [{name: "item1", price: 5}]} ) ).toEqual(
            [{name: 'item1', price: 5}] )
    } );

    it( 'should overwrite item in state with new one', () => {
        expect( pricesReducer( [{name: 'item1', "listings": [{"price": 6, "count": 1}]}],
                               {
                                   type: PRICES_LOAD,
                                   items: [{name: "item1", "listings": [{"price": 10, "count": 2}]}]
                               } ) ).toEqual(
            [{name: 'item1', "listings": [{"price": 10, "count": 2}]}] )
    } );

    it( 'should set state to empty when cleared', () => {
        expect(
            pricesReducer( [{name: 'item1', "listings": [{"price": 5, "count": 1}]}], {type: PRICES_CLEAR} ) ).toEqual(
            [] )
    } );


} );