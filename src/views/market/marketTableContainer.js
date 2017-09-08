import {connect} from "react-redux";
import MarketTable from "./marketTable";
import {getListingsForItemSelector} from "../../modules/prices/pricesSelector";


export default connect(
    ( state, props ) => ({
        listings: getListingsForItemSelector( state, props )
    }),
    {}
)( MarketTable );