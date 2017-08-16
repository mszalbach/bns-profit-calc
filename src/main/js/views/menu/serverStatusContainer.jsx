import {connect} from "react-redux";
import ServerStatus from "./serverStatus";
import {getServerStatusSelector} from "../../modules/serverStatus/serverStatusSelector";
import {loadPrices} from "../../modules/prices/pricesReducer";
import {loadItems} from "../../modules/items/itemsReducer";


export default connect(
    ( state ) => ({
        status: getServerStatusSelector( state )
    }),
    {loadPrices, loadItems}
)( ServerStatus );