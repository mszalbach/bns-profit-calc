import {connect} from "react-redux";
import ServerStatus from "./serverStatus";
import {getServerStatusSelector} from "../../reducers/serverStatus/serverStatusSelector";
import {loadPrices} from "../../reducers/prices/pricesReducer";
import {loadItems} from "../../reducers/items/itemsReducer";
import {getPricesUrlSelector} from "../../reducers/region/regionSelector";


export default connect(
    ( state ) => ({
        status: getServerStatusSelector( state ),
        pricesUrl: getPricesUrlSelector( state )
    }),
    {loadPrices, loadItems}
)( ServerStatus );