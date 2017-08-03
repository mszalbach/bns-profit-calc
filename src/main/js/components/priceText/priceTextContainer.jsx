import {connect} from "react-redux";
import PriceText from "./priceText";
import {getPriceForItemSelector} from "../../modules/prices/pricesSelector";


export default connect(
    ( state, props ) => ({
        price: getPriceForItemSelector( state, props )
    }),
    {}
)( PriceText );