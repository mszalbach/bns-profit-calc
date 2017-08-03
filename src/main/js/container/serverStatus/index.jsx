import {connect} from "react-redux";
import ServerStatus from "../../components/serverStatus/index";
import {getServerStatusSelector} from "../../selectors/server_status";
import {loadPrices} from "../../reducers/prices";
import {loadItems} from "../../reducers/items";


export default connect(
    ( state ) => ({
        status: getServerStatusSelector( state )
    }),
    {loadPrices, loadItems}
)( ServerStatus );