import {connect} from "react-redux";
import ItemSelector from "../../components/itemSelector";
import {getSortedItemsSelector} from "../../selectors/items";


export default connect(
    ( state ) => ({
        items: getSortedItemsSelector( state )
    }),
    {}
)( ItemSelector );