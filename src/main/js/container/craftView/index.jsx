import {connect} from "react-redux";
import {craftSelector, profitSelector, totalCraftingCostSelector} from "../../reducers/crafting";
import CraftView from "../../components/craftView/index";


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