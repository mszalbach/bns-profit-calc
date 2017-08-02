import {connect} from "react-redux";
import {mergePrice} from "../../reducers/prices";
import ItemImage from "../../components/itemImage/index";
import {getImageForItemSelector} from "../../selectors/items";


export default connect(
    ( state, props ) => ({
        image: getImageForItemSelector( state, props )
    }),
    {}
)( ItemImage );