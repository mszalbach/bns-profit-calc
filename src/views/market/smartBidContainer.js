import {connect} from "react-redux";
import SmartBid from "./smartBid";
import {getPriceForItemSelector} from "../../modules/prices/pricesSelector";


export default connect(
    ( state, props ) => ({
        price: getPriceForItemSelector( state, props )
    }),
    {}
)( SmartBid );