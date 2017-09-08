import React from "react";
import PropTypes from "prop-types";
import {Dropdown} from "semantic-ui-react";

export default class RegionSwitcher extends React.Component {

    static propTypes = {
        region: PropTypes.string.isRequired,
        switchRegion: PropTypes.func.isRequired,
        loadPrices: PropTypes.func.isRequired
    };

    switchRegion = ( event, data ) => {
        this.props.switchRegion( data.value );
        this.props.loadPrices();
    };

    regionOptions = [
        {text: 'EU', value: 'eu'},
        {text: 'NA', value: 'na'}
    ];


    render() {
        return <Dropdown defaultValue={this.props.region} options={this.regionOptions} onChange={this.switchRegion}/>
    }
}