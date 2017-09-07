import {applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {routerMiddleware} from "react-router-redux";
import axiosMiddleware from 'redux-axios-middleware'
import persistState from "redux-localstorage";
import {history} from "./history";
import {axiosClient} from "./axios";


export default compose(
    applyMiddleware( thunk ),
    applyMiddleware( axiosMiddleware( axiosClient ) ),
    applyMiddleware( routerMiddleware( history ) ),
    persistState( ['region'] )
);