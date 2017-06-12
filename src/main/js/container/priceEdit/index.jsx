import {connect} from "react-redux";
import PriceEdit from "../../components/priceEdit/index";
import {getPriceForItem, hasPriceForItem, mergePrice} from "../../reducers/prices";


export default connect(
        ( state, props ) => ({price: getPriceForItem( state, props )}),
        {mergePrice}
)( PriceEdit );