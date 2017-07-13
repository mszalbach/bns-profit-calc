import pricesReducer, {PRICES_CLEAR, PRICES_LOAD} from "../../main/js/reducers/prices";

describe( 'Prices', () => {
    it( 'should load single item to empty state', () => {
        expect( pricesReducer( [], {type: PRICES_LOAD, items: [{name: "item1", price: 5}]} ) ).toEqual(
            [{name: 'item1', price: 5}] )
    } );

    it( 'should add item to existing state', () => {
        expect( pricesReducer( [{name: 'item1', price: 5}],
                               {type: PRICES_LOAD, items: [{name: "item2", price: 5}]} ) ).toEqual(
            [{name: 'item1', price: 5}, {name: 'item2', price: 5}] )
    } );

    it( 'should overwrite item in state with new one', () => {
        expect( pricesReducer( [{name: 'item1', price: 5}],
                               {type: PRICES_LOAD, items: [{name: "item1", price: 10}]} ) ).toEqual(
            [{name: 'item1', price: 10}] )
    } );

    it( 'should set state to empty when cleared', () => {
        expect( pricesReducer( [{name: 'item1', price: 5}], {type: PRICES_CLEAR} ) ).toEqual( [] )
    } );


} );