import {connect} from "react-redux";
import ItemSelector from "./itemSelector";
import {getSortedItemsSelector} from "../../reducers/items/itemsSelector";


export default connect(
    ( state ) => ({
        items: getSortedItemsSelector( state )
    }),
    {}
)( ItemSelector );