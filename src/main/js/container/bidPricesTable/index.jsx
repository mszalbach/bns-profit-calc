import {connect} from "react-redux";
import {getPriceForItemSelector} from "../../reducers/prices/pricesSelector";
import BidPrices from "../../components/bidPricesTable";


export default connect(
    ( state, props ) => ({
        price: getPriceForItemSelector( state, props )
    }),
    {}
)( BidPrices );