import React from "react";
import PropTypes from "prop-types";
import {formatNumberToBnSCurrency} from "../../utils/NumberFormat";
import CurrencyImage from "./curencyImage";

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

        let priceString = formatNumberToBnSCurrency( price );


        //(-)09g 88s 00c
        let myRegexp = /(-*\d+)g (\d+)s (\d+)c/g;
        let match = myRegexp.exec( priceString );
        let gold = match[1];
        let silver = match[2];
        let copper = match[3];


        return <span className={classname}>{gold}<CurrencyImage type="gold"/> {silver}<CurrencyImage
            type="silver"/> {copper}<CurrencyImage type="copper"/></span>;
    }
}

