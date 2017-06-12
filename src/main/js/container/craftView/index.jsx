import {connect} from "react-redux";
import {enrichedCraftSelector} from "../../reducers/crafting";
import CraftView from "../../components/craftView/index";


export default connect(
        ( state, props ) => ({
            item: enrichedCraftSelector( state, props )
        }),
        {}
)( CraftView );