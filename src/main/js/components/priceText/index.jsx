import React from "react";
import PropTypes from "prop-types";
import {formatNumberToBnSCurrency} from "../../utils/NumberFormat";

export default class PriceText extends React.Component {

    static propTypes = {
        price: PropTypes.number,
    };

    render() {
        let {price, ...props} = this.props;
        return <span {...props}>{formatNumberToBnSCurrency( price )}</span>;
    }
}