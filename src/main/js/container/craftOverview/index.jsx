import {connect} from "react-redux";
import {allCrafts} from "../../reducers/crafting";
import CraftOverview from "../../components/craftOverview/index";


export default connect(
        ( state, props ) => ({
            items: allCrafts( state, props ),
        }),
        {}
)( CraftOverview );