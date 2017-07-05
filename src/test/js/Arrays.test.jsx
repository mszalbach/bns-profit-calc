import {merge} from "../../main/js/utils/Arrays";

describe( 'merge', () => {
    it( 'should merge arrays with no equal key', () => {
        let a1 = [{key: 1, value: 1}];
        let a2 = [{key: 2, value: 2}];
        expect( merge( a1, a2, "key" ) ).toEqual( [{key: 1, value: 1}, {key: 2, value: 2}] );
    } );

    it( 'should overwrite equal key with second array', () => {
        let a1 = [{key: 1, value: 1}];
        let a2 = [{key: 1, value: 2}];
        expect( merge( a1, a2, "key" ) ).toEqual( [{key: 1, value: 2}] );
    } );
    it( 'should merge when one array is empty', () => {
        let a1 = [];
        let a2 = [{key: 1, value: 1}];
        expect( merge( a1, a2, "key" ) ).toEqual( [{key: 1, value: 1}] );
    } );

} );