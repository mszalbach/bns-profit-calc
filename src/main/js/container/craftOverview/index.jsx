import {connect} from "react-redux";
import CraftOverview from "../../components/craftOverview";
import {getCraftingWithProfitSelector} from "../../reducers/craftingPrice/craftingPriceSelector";


export default connect(
        ( state, props ) => ({
            items: getCraftingWithProfitSelector( state, props )
        }),
        {}
)( CraftOverview );