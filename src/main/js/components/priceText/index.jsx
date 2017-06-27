import React from "react";
import PropTypes from "prop-types";
import {formatNumberToBnSCurrency} from "../../utils/NumberFormat";

import "./priceText.css";

export default class PriceText extends React.Component {

    static propTypes = {
        price: PropTypes.number.isRequired,
        shouldHighlight: PropTypes.bool
    };

    render() {
        let {price, shouldHighlight} = this.props;
        let classname = "";
        if ( shouldHighlight ) {
            classname = price >= 0 ? "positive" : "negative";
        }
        return <span className={classname}>{formatNumberToBnSCurrency( price )}</span>;
    }
}