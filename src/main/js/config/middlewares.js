import {applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {routerMiddleware} from "react-router-redux";
import persistState from "redux-localstorage";
import {history} from "./history";


export default compose(
        applyMiddleware( thunk ),
        applyMiddleware( routerMiddleware( history ) ),
        persistState( ['prices'] )
);