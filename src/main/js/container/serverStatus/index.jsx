import {connect} from "react-redux";
import ServerStatus from "../../components/serverStatus/index";
import {getServerStatusSelector} from "../../selectors/server_status";


export default connect(
    ( state ) => ({
        status: getServerStatusSelector( state )
    }),
    {}
)( ServerStatus );