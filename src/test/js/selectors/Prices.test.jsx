import {getPriceForItemSelector} from "../../../main/js/reducers/prices/pricesSelector";


describe( 'Prices Selector', () => {
    it( 'should return price for name', () => {
        expect(
            getPriceForItemSelector.resultFunc(
                [{name: 'a', "listings": [{"price": 5, "count": 1}]},
                    {name: 'b', "listings": [{"price": 6, "count": 2}]}], 'a' ) ).toEqual( 5 )
    } );

    it( 'should return price for name when multiple items are listed', () => {
        expect(
            getPriceForItemSelector.resultFunc(
                [{name: 'a', "listings": [{"price": 10, "count": 2}]}], 'a' ) ).toEqual( 5 )
    } );


} );