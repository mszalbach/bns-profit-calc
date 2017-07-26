import {formatNumberToBnSCurrency} from "../../../main/js/utils/NumberFormat";
describe( 'formatNumberToBnSCurrency', () => {
    it( 'should format <100 to copper', () => {
        expect( formatNumberToBnSCurrency( 50 ) ).toEqual( "00g 00s 50c" );
    } );
    it( 'should format 100<x<10000 to silver', () => {
        expect( formatNumberToBnSCurrency( 400 ) ).toEqual( "00g 04s 00c" );
    } );
    it( 'should format x>10000 to gold', () => {
        expect( formatNumberToBnSCurrency( 20000 ) ).toEqual( "02g 00s 00c" );
    } );
    it( 'should format full filled example', () => {
        expect( formatNumberToBnSCurrency( 987654 ) ).toEqual( "98g 76s 54c" );
    } );
    it( 'should have nothing above gold', () => {
        expect( formatNumberToBnSCurrency( 10000000 ) ).toEqual( "1000g 00s 00c" );
    } );
    it( 'should return 0 value for nothing', () => {
        expect( formatNumberToBnSCurrency() ).toEqual( "00g 00s 00c" );
    } );

    it( 'should be able to convert negative numbers', () => {
        expect( formatNumberToBnSCurrency( -400 ) ).toEqual( "-00g 04s 00c" );
    } );

} );

