import {connect} from "react-redux";
import {craftSelector, getTotalCraftCost} from "../../reducers/crafting";
import CraftView from "../../components/craftView/index";
import {getAhPriceFor} from "../../reducers/prices";


export default connect(
        ( state, props ) => ({
            item: craftSelector( state, props ),
            craftingCost: getTotalCraftCost( state, props ),
            ahPrice: getAhPriceFor( state, props )
        }),
        {}
)( CraftView );