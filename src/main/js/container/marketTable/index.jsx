import {connect} from "react-redux";
import MarketTable from "../../components/marketTable/index";
import {getListingsForItemSelector} from "../../selectors/prices";


export default connect(
    ( state, props ) => ({
        listings: getListingsForItemSelector( state, props )
    }),
    {}
)( MarketTable );