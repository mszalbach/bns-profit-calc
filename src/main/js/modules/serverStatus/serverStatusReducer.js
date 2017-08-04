import merge from "deepmerge";

const LOADED = 0;
const LOADING = 1;
const ERROR = 2;

const serverStatusMap = {
    'LOADED': 0,
    'LOADING': 1,
    'ERROR': 2
};

const initialState = {};

export default function serverStatusReducer( state = initialState, action ) {
    if ( action.type.match( ".*/(LOADING)" ) ) {
        let serverItem = action.type.match( "(.*)/.*" )[1];
        let serverStatus = action.type.match( ".*/(.*)" )[1];
        let serverUrl = action.payload.request.url;
        return merge( state, {
            [serverItem]: {
                item: serverItem,
                url: serverUrl,
                status: serverStatusMap[serverStatus]
            }
        } )
    } else if ( action.type.match( ".*/(LOADED|ERROR)" ) ) {
        let serverItem = action.type.match( "(.*)/.*" )[1];
        let serverStatus = action.type.match( ".*/(.*)" )[1];
        return merge( state, {
            [serverItem]: {
                status: serverStatusMap[serverStatus]
            }
        } )

    }
    return state;
}





