import {connect} from "react-redux";
import ItemImage from "./itemImage";
import {getImageForItemSelector} from "../../reducers/items/itemsSelector";


export default connect(
    ( state, props ) => ({
        image: getImageForItemSelector( state, props )
    }),
    {}
)( ItemImage );