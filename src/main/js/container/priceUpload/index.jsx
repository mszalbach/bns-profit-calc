import {connect} from "react-redux";
import {updatePrices} from "../../reducers/prices";
import PriceUpload from "../../components/priceUpload/index";


export default connect(
        ( state ) => ({}),
        {updatePrices}
)( PriceUpload );