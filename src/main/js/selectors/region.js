import {createSelector} from "reselect";
import {PRICES_URL} from "../reducers/prices";

export const getRegionSelector = ( state ) => state.region;

export const getPricesUrlSelector = createSelector( [getRegionSelector],
                                                    ( region ) => PRICES_URL.replace( '{region}', region ) )