import {connect} from "react-redux";
import MarketTable from "../../components/marketTable/index";
import {getListingsForItemSelector} from "../../reducers/prices/pricesSelector";


export default connect(
    ( state, props ) => ({
        listings: getListingsForItemSelector( state, props )
    }),
    {}
)( MarketTable );