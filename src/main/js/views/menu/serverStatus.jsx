import React from "react";
import PropTypes from "prop-types";

import {Button, Label, OverlayTrigger, Popover} from "react-bootstrap";


export default class ServerStatus extends React.Component {
    static propTypes = {
        status: PropTypes.object.isRequired,
        loadPrices: PropTypes.func.isRequired,
        loadItems: PropTypes.func.isRequired
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
            <Popover title='http://bns.silveress.ie/home' id="Detailed Server Status" style={{maxWidth: '600px'}}>
                {Object.values( status ).map( s => <div key={s.item}><Label bsStyle={statusCss[s.status]}>
                    {s.url}
                </Label></div> )}

                <Button bsSize="small" onClick={this.loadDataFromServer}>Load</Button>
            </Popover>
        );

        let maxCode = Math.max( ...Object.values( status ).map( s => s.status ) );
        let statusColor = statusCss[maxCode];

        return <OverlayTrigger trigger="click" placement="left" overlay={serverStatusDetails}>
            <Button className="navbar-btn" bsStyle={statusColor}>Server Status</Button>
        </OverlayTrigger>

    }
}