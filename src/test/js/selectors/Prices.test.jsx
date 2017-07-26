import {getPriceForItemSelector} from "../../../main/js/selectors/prices";


describe( 'Prices Selector', () => {
    it( 'should return price for name', () => {
        expect(
            getPriceForItemSelector.resultFunc(
                [{name: 'a', price: 5}, {name: 'b', price: 6}], 'a' ) ).toEqual( 5 )
    } );


} );