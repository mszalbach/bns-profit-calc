import {connect} from "react-redux";
import {getRegionSelector} from "../../selectors/region";
import RegionSwitcher from "../../components/regionSwitcher/index";
import {switchRegion} from "../../reducers/region";
import {loadPrices} from "../../reducers/prices";


export default connect(
    ( state ) => ({
        region: getRegionSelector( state )
    }),
    {switchRegion, loadPrices}
)( RegionSwitcher );