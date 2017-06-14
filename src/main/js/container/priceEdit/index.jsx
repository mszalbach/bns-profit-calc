import {connect} from "react-redux";
import PriceEdit from "../../components/priceEdit/index";
import {mergePrice} from "../../reducers/prices";
import {getPriceForItemSelector} from "../../selectors/prices";


export default connect(
        ( state, props ) => ({price: getPriceForItemSelector( state, props )}),
        {mergePrice}
)( PriceEdit );