import React from "react";
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";


export default class PriceUpload extends React.Component {
    static propTypes = {
        loadPrices: PropTypes.func.isRequired
    };


    render() {
        return (
                <div>
                    <div>You can upload the prices from <a href="http://api.silveress.ie/bns/market/EU.json">ap.silveress.ie</a>.
                    </div>
                    <br />
                    <Button onClick={this.props.loadPrices}>Load Data</Button>
                </div>
        )
    }
}