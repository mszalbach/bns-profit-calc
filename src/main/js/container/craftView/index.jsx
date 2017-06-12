import {connect} from "react-redux";
import {craftingCostSelector, enrichedCraftSelector, testA} from "../../reducers/crafting";
import CraftView from "../../components/craftView/index";
import {getPriceForItem} from "../../reducers/prices";


export default connect(
        ( state, props ) => ({
            item: craftingCostSelector( state, props ),
            ahPrice: getPriceForItem( state, props ),
            //needed or else component did not trigger on price changes
            prices: state.prices
        }),
        {}
)( CraftView );