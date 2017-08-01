import {connect} from "react-redux";
import {getPriceForItemSelector} from "../../selectors/prices";
import BidPrices from "../../components/bidPricesTable";


export default connect(
    ( state, props ) => ({
        price: getPriceForItemSelector( state, props )
    }),
    {}
)( BidPrices );