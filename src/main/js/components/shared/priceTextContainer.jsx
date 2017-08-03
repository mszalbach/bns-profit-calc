import {connect} from "react-redux";
import PriceText from "./priceText";
import {getPriceForItemSelector} from "../../reducers/prices/pricesSelector";


export default connect(
    ( state, props ) => ({
        price: getPriceForItemSelector( state, props )
    }),
    {}
)( PriceText );