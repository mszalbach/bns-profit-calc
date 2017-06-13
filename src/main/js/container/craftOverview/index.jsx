import {connect} from "react-redux";
import {allCrafts} from "../../reducers/crafting";
import CraftOverview from "../../components/craftOverview/index";
import {push} from "react-router-redux";


export default connect(
        ( state, props ) => ({
            items: allCrafts( state, props ),
        }),
        {push}
)( CraftOverview );