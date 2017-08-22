import {connect} from "react-redux";
import {getOneCraftingWithProfitSelector} from "../../modules/craftingPrice/craftingPriceSelector";
import CraftDetails from "./craftDetails";


export default connect(
    ( state, props ) => ({
        item: getOneCraftingWithProfitSelector( state, props )
    }),
    {}
)( CraftDetails );