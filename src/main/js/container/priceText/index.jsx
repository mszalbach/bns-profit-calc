import {connect} from "react-redux";
import PriceText from "../../components/priceText";
import {getPriceForItemSelector} from "../../selectors/prices";


export default connect(
    ( state, props ) => ({
            price: getPriceForItemSelector( state, props )
        }),
    {}
)( PriceText );