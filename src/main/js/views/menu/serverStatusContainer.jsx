import {connect} from "react-redux";
import ServerStatus from "./serverStatus";
import {getServerStatusSelector} from "../../modules/serverStatus/serverStatusSelector";
import {loadPrices} from "../../modules/prices/pricesReducer";
import {loadItems} from "../../modules/items/itemsReducer";
import {getItemsUrlSelector, getPricesUrlSelector} from "../../modules/region/regionSelector";


export default connect(
    ( state ) => ({
        status: getServerStatusSelector( state ),
        pricesUrl: getPricesUrlSelector( state ),
        itemsUrl: getItemsUrlSelector( state )
    }),
    {loadPrices, loadItems}
)( ServerStatus );