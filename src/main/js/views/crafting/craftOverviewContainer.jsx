import {connect} from "react-redux";
import CraftOverview from "./craftOverview";
import {getCraftingWithProfitSelector} from "../../modules/craftingPrice/craftingPriceSelector";


export default connect(
        ( state, props ) => ({
            items: getCraftingWithProfitSelector( state, props )
        }),
        {}
)( CraftOverview );