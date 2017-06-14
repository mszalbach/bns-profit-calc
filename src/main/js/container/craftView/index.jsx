import {connect} from "react-redux";
import CraftView from "../../components/craftView/index";
import {craftSelector} from "../../selectors/crafting";
import {profitSelector, totalCraftingCostSelector} from "../../selectors/crafting_price";


export default connect(
        ( state, props ) => ({
            item: craftSelector( state, props ),
            totalCraftingCost: totalCraftingCostSelector( state, props ),
            profit: profitSelector( state, props ),
            //needed or else component did not trigger on price changes
            prices: state.prices
        }),
        {}
)( CraftView );