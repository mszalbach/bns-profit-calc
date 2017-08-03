import {connect} from "react-redux";
import {getRegionSelector} from "../../reducers/region/regionSelector";
import RegionSwitcher from "../../components/regionSwitcher";
import {switchRegion} from "../../reducers/region/regionReducer";
import {loadPrices} from "../../reducers/prices/pricesReducer";


export default connect(
    ( state ) => ({
        region: getRegionSelector( state )
    }),
    {switchRegion, loadPrices}
)( RegionSwitcher );