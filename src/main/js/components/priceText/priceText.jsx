import React from "react";
import PropTypes from "prop-types";
import {formatNumberToBnSCurrency} from "../../utils/NumberFormat";

import "./priceText.css";
import {Image} from "semantic-ui-react";

export default class PriceText extends React.Component {

    static propTypes = {
        price: PropTypes.number.isRequired,
        shouldHighlight: PropTypes.bool
    };

    currencyImages = {
        'gold': 'https://bladeandsoul.gamepedia.com/media/bladeandsoul.gamepedia.com/1/10/Gold.png',
        'silver': 'https://bladeandsoul.gamepedia.com/media/bladeandsoul.gamepedia.com/0/0b/Silver.png',
        'copper': 'https://bladeandsoul.gamepedia.com/media/bladeandsoul.gamepedia.com/1/12/Copper.png'
    };

    currency = ( type ) => <Image inline verticalAlign='middle' alt="g" src={this.currencyImages[type]}/>;


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


        return <span className={classname}>{gold}{this.currency( 'gold' )} {silver}{this.currency(
            'silver' )} {copper}{this.currency( 'copper' )}</span>;
    }
}