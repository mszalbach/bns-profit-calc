import merge from "deepmerge";

const LOADED = 0;
const LOADING = 1;
const ERROR = 2;

const initialState = {};

export default function serverStatusReducer( state = initialState, action ) {
    if ( action.type.match( ".*/LOADING" ) ) {
        let serverItem = action.type.match( "(.*)/.*" )[1];
        let serverUrl = action.payload.request.url;
        return merge( state, {
            [serverItem]: {
                item: serverItem,
                url: serverUrl,
                status: LOADING
            }
        } )
    } else if ( action.type.match( ".*/LOADED" ) ) {
        let serverItem = action.type.match( "(.*)/.*" )[1];
        let serverUrl = action.payload.request.responseURL;
        return merge( state, {
            [serverItem]: {
                item: serverItem,
                url: serverUrl,
                status: LOADED
            }
        } )

    } else if ( action.type.match( ".*/ERROR" ) ) {
        let serverItem = action.type.match( "(.*)/.*" )[1];
        let serverUrl = action.error.request.responseURL;
        return merge( state, {
            [serverItem]: {
                item: serverItem,
                url: serverUrl,
                status: ERROR
            }
        } )

    }
    return state;
}





