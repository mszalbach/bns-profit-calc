import React from "react";
import PropTypes from "prop-types";

import {Image} from "semantic-ui-react";

export default class CurrencyImage extends React.Component {

    static propTypes = {
        type: PropTypes.string.isRequired,
    };

    currencyImages = {
        'gold': 'https://bladeandsoul.gamepedia.com/media/bladeandsoul.gamepedia.com/1/10/Gold.png',
        'silver': 'https://bladeandsoul.gamepedia.com/media/bladeandsoul.gamepedia.com/0/0b/Silver.png',
        'copper': 'https://bladeandsoul.gamepedia.com/media/bladeandsoul.gamepedia.com/1/12/Copper.png'
    };

    render() {
        return <Image inline verticalAlign='middle' alt="g" src={this.currencyImages[this.props.type]}/>;
    }
}