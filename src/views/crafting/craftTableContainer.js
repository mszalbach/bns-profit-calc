import {connect} from "react-redux";
import CraftTable from "./craftTable";
import {getCraftingWithBestProfitSelector} from "../../modules/craftingPrice/craftingPriceSelector";


export default connect(
    ( state, props ) => ({
        items: getCraftingWithBestProfitSelector( state, props )
    }),
    {}
)( CraftTable );