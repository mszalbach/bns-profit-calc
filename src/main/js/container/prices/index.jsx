import {connect} from "react-redux";
import {clearPrices, loadPrices} from "../../reducers/prices";
import Prices from "../../components/prices/index";
import {getAllPricesSelector} from "../../selectors/crafting_price";


export default connect(
        ( state ) => ({allPrices: getAllPricesSelector( state )}),
        {clearPrices, loadPrices}
)( Prices );