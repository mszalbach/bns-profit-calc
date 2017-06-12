import reducer from "../reducers";
import middleware from "./middlewares";
import {createStore} from "redux";
import {syncHistoryWithStore} from "react-router-redux";
import {history} from "./history";

let initialize = ( initialState = {} ) => {
    const store = createStore( reducer, initialState, middleware );

    if ( module.hot ) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept( '../reducers', () => {
            const nextReducer = require( '../reducers' );
            store.replaceReducer( nextReducer );
        } );
    }
    syncHistoryWithStore( history, store );
    return store;
};

export default initialize;
