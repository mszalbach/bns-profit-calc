import {connect} from "react-redux";
import ItemSelector from "./itemSelector";
import {getSortedItemsSelector} from "../../modules/items/itemsSelector";


export default connect(
    ( state ) => ({
        items: getSortedItemsSelector( state )
    }),
    {}
)( ItemSelector );