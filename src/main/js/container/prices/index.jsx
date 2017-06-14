import {connect} from "react-redux";
import {clearPrices} from "../../reducers/prices";
import Prices from "../../components/prices/index";


export default connect(
        ( state, props ) => ({}),
        {clearPrices}
)( Prices );