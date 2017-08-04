import serverStatusReducer from "../../../../main/js/modules/serverStatus/serverStatusReducer";

describe( 'Server Status Reducer', () => {
    it( 'should load single item to empty state', () => {
        expect( serverStatusReducer( {}, {
            type: 'item/LOADING',
            payload: {request: {url: "http://test.org"}}
        } ) ).toEqual(
            {item: {item: 'item', url: "http://test.org", status: 1}} )
    } );
    it( 'should add new item to existing state', () => {
        expect( serverStatusReducer( {item: {item: 'item', url: "http://test.org", status: 1}}, {
            type: 'item2/LOADING',
            payload: {request: {url: "http://test2.org"}}
        } ) ).toEqual(
            {
                item: {item: 'item', url: "http://test.org", status: 1},
                item2: {item: 'item2', url: "http://test2.org", status: 1}
            } )
    } );
    it( 'should overwrite item in existing state', () => {
        expect( serverStatusReducer( {item: {item: 'item', url: "http://test.org", status: 1}}, {
            type: 'item/ERROR',
            error: {request: {responseURL: "http://test.org"}}
        } ) ).toEqual(
            {item: {item: 'item', url: "http://test.org", status: 2}} )
    } );

} );