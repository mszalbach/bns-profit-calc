import {connect} from "react-redux";
import {craftSelector, getAhPriceFor, getTotalCraftCost} from "../../reducers/crafting";
import CraftView from "../../components/craftView/index";


export default connect(
        ( state, props ) => ({
            item: craftSelector( state, props ),
            craftingCost: getTotalCraftCost( state, props ),
            ahPrice: getAhPriceFor( state, props )
        }),
        {}
)( CraftView );