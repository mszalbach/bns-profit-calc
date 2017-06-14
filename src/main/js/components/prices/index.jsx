import React from "react";
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";

import "react-bootstrap-table/dist/react-bootstrap-table.min.css";


export default class Prices extends React.Component {
    static propTypes = {
        clearPrices: PropTypes.func.isRequired
    };

    render() {
        return (
                <Button onClick={this.props.clearPrices}>Clear prices</Button>
        )
    }
}