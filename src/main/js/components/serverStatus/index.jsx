import React from "react";
import PropTypes from "prop-types";

import {Button, Label, OverlayTrigger, Popover} from "react-bootstrap";
import {ITEMS_URL} from "../../reducers/items";


export default class ServerStatus extends React.Component {
    static propTypes = {
        status: PropTypes.object.isRequired,
        loadPrices: PropTypes.func.isRequired,
        loadItems: PropTypes.func.isRequired,
        pricesUrl: PropTypes.string.isRequired
    };

    state = {
        timer: null,
    };

    loadDataFromServer = () => {
        this.props.loadItems();
        this.props.loadPrices();
    };

    componentDidMount() {
        this.loadDataFromServer();
        let timer = setInterval( this.loadDataFromServer, 60 * 1000 );

        this.setState( {timer: timer} );
    }

    componentWillUnmount() {
        this.clearInterval( this.state.timer );
    }


    render() {
        let {status} = this.props;
        let statusCss = {2: 'danger', 1: 'warning', 0: 'success'};
        const serverStatusDetails = (
            <Popover title="https://api.silveress.ie" id="Detailed Server Status" style={{maxWidth: '600px'}}>
                <Label bsStyle={statusCss[status.items.status]}>
                    {ITEMS_URL}
                </Label>
                <br/>
                <Label
                    bsStyle={statusCss[status.prices.status]}>
                    {this.props.pricesUrl}
                </Label>
                <br/>
                <br/>
                <Button bsSize="small" onClick={this.loadDataFromServer}>Load</Button>
            </Popover>
        );


        let maxCode = Math.max( status.items.status, status.prices.status );
        let statusColor = statusCss[maxCode];

        return <OverlayTrigger trigger="click" placement="left" overlay={serverStatusDetails}>
            <Button className="navbar-btn" bsStyle={statusColor}>Server Status</Button>
        </OverlayTrigger>

    }
}