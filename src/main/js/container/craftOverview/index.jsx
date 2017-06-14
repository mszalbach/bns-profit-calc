import {connect} from "react-redux";
import {allCraftsSelector} from "../../selectors/crafting";
import CraftOverview from "../../components/craftOverview/index";
import {push} from "react-router-redux";


export default connect(
        ( state, props ) => ({
            items: allCraftsSelector( state, props ),
        }),
        {push}
)( CraftOverview );