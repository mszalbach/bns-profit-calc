import React from "react";
import PropTypes from "prop-types";
import {FormControl} from "react-bootstrap";

export default class RegionSwitcher extends React.Component {

    static propTypes = {
        region: PropTypes.string.isRequired,
        switchRegion: PropTypes.func.isRequired,
        loadPrices: PropTypes.func.isRequired
    };

    switchRegion = ( event ) => {
        this.props.switchRegion( event.target.value );
        this.props.loadPrices();
    };


    render() {
        return <FormControl componentClass="select"
                            className="navbar-btn"
                            placeholder="select"
                            defaultValue={this.props.region}
                            onChange={this.switchRegion}>
            <option value="eu">EU</option>
            <option value="na">NA</option>
        </FormControl>
    }
}