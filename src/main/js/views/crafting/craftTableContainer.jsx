import {connect} from "react-redux";
import CraftTable from "./craftTable";
import {getCraftingWithProfitSelector} from "../../modules/craftingPrice/craftingPriceSelector";


export default connect(
    ( state, props ) => ({
        items: getCraftingWithProfitSelector( state, props )
    }),
    {}
)( CraftTable );