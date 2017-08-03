import {connect} from "react-redux";
import {getPriceForItemSelector} from "../../modules/prices/pricesSelector";
import BidPricesTable from "./bidPricesTable";


export default connect(
    ( state, props ) => ({
        price: getPriceForItemSelector( state, props )
    }),
    {}
)( BidPricesTable );