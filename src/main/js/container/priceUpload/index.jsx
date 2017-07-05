import {connect} from "react-redux";
import {clearPrices, loadPrices} from "../../reducers/prices";
import PriceUpload from "../../components/priceUpload/index";


export default connect(
        ( state ) => ({}),
        {loadPrices, clearPrices}
)( PriceUpload );