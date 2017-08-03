import {connect} from "react-redux";
import {getRegionSelector} from "../../modules/region/regionSelector";
import RegionSwitcher from "./regionSwitcher";
import {switchRegion} from "../../modules/region/regionReducer";
import {loadPrices} from "../../modules/prices/pricesReducer";


export default connect(
    ( state ) => ({
        region: getRegionSelector( state )
    }),
    {switchRegion, loadPrices}
)( RegionSwitcher );