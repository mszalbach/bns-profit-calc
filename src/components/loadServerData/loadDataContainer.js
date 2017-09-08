import {connect} from "react-redux";
import {loadPrices} from "../../modules/prices/pricesReducer";
import {loadItems} from "../../modules/items/itemsReducer";
import LoadData from "./loadData";


export default connect(
    ( state ) => ({}),
    {loadPrices, loadItems}
)( LoadData );