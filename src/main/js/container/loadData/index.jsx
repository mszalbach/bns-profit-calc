import {connect} from "react-redux";
import LoadData from "../../components/loadData";
import {loadPrices} from "../../reducers/prices";


export default connect(
    ( state, props ) => ({}),
    {loadPrices}
)( LoadData );