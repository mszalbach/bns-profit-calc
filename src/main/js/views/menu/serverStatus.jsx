import React from "react";
import PropTypes from "prop-types";

import {OverlayTrigger, Popover} from "react-bootstrap";
import {Button, Label, Popup} from "semantic-ui-react";


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
        let statusCss = {2: 'red', 1: 'yellow', 0: 'green'};


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

        return <Popup
            trigger={<Button color={statusColor}>Server Status</Button>}
            on="click"
            flowing
        >
            {Object.values( status ).map( s => <div key={s.item}>
                <Label circular color={statusCss[s.status]}>
                    {s.url}
                </Label>
            </div> )}
            <div>
                <Button size='small' onClick={this.loadDataFromServer}>Load</Button>
            </div>
        </Popup>

    }
}