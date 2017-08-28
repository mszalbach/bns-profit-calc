import {connect} from "react-redux";
import ItemSelector from "./itemSelector";
import {getSortedItemsNamesSelector} from "../../modules/items/itemsSelector";


export default connect(
    ( state ) => ({
        items: getSortedItemsNamesSelector( state )
    }),
    {}
)( ItemSelector );