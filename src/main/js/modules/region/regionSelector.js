import {createSelector} from "reselect";
import {PRICES_URL} from "../prices/pricesReducer";
import {BASEURL} from "../../config/axios";

export const getRegionSelector = ( state ) => state.region;

export const getPricesUrlSelector = createSelector( [getRegionSelector],
                                                    ( region ) => BASEURL + PRICES_URL.replace( '{region}', region ) );