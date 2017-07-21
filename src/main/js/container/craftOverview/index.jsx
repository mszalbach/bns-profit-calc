import {connect} from "react-redux";
import CraftOverview from "../../components/craftOverview";
import {getCraftingWithProfitSelector} from "../../selectors/crafting_price";


export default connect(
        ( state, props ) => ({
            items: getCraftingWithProfitSelector( state, props )
        }),
        {}
)( CraftOverview );