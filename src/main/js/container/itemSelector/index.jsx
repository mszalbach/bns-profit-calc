import {connect} from "react-redux";
import ItemSelector from "../../components/itemSelector";
import {getItemsSelector} from "../../selectors/items";


export default connect(
    ( state ) => ({
        items: getItemsSelector( state )
    }),
    {}
)( ItemSelector );