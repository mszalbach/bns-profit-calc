import {createSelector} from "reselect";
import {PRICES_URL} from "../prices/pricesReducer";
import {BASEURL} from "../../config/axios";
import {ITEMS_URL} from "../items/itemsReducer";

export const getRegionSelector = ( state ) => state.region;

export const getPricesUrlSelector = createSelector( [getRegionSelector],
                                                    ( region ) => BASEURL + PRICES_URL.replace( '{region}', region ) );

export const getItemsUrlSelector = ( state ) => BASEURL + ITEMS_URL;