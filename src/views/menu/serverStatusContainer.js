import {connect} from "react-redux";
import ServerStatus from "./serverStatus";
import {getServerStatusSelector} from "../../modules/serverStatus/serverStatusSelector";


export default connect(
    ( state ) => ({
        status: getServerStatusSelector( state )
    }),
    {}
)( ServerStatus );