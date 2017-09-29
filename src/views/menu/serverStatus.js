import React from "react";
import PropTypes from "prop-types";
import {Button, Label, Popup} from "semantic-ui-react";


export default class ServerStatus extends React.Component {
    static propTypes = {
        status: PropTypes.object.isRequired,
        loadPrices: PropTypes.func.isRequired,		
        loadItems: PropTypes.func.isRequired
    };

    loadDataFromServer = () => {		
        this.props.loadItems();		
        this.props.loadPrices();		
    };


    render() {
        let {status} = this.props;
        let statusCss = {2: 'red', 1: 'yellow', 0: 'green'};

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
