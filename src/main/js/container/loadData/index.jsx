import {connect} from "react-redux";
import LoadData from "../../components/loadData";
import {loadPrices} from "../../reducers/prices";
import {loadItems} from "../../reducers/items";


export default connect(
    ( state, props ) => ({}),
    {loadPrices, loadItems}
)( LoadData );