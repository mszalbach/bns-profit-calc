export function formatNumberToBnSCurrency( number ) {
    if ( !number ) {
        return "00g 00s 00c";
    }

    number = Math.round(number);

    let sign = Math.sign( number );
    let absnumber = Math.abs( number );

    let c = absnumber % 100;
    let s = Math.floor( absnumber / 100 % 100 );
    let g = Math.floor( absnumber / 10000 );


    return (sign < 0 ? "-" : "") + pad( g, 2 ) + "g " + pad( s, 2 ) + "s " + pad( c, 2 ) + "c";
}

function pad( num, size ) {
    let s = num + "";
    while ( s.length < size ) {
        s = "0" + s;
    }
    return s;
}