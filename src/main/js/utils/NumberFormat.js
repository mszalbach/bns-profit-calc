export function formatNumberToBnSCurrency( number ) {
    if ( !number ) {
        return "00g 00s 00c";
    }
    let c = number % 100;
    let s = Math.floor( number / 100 % 100 );
    let g = Math.floor( number / 10000 );

    return pad( g, 2 ) + "g " + pad( s, 2 ) + "s " + pad( c, 2 ) + "c";
}

function pad( num, size ) {
    let s = num + "";
    while ( s.length < size ) {
        s = "0" + s;
    }
    return s;
}