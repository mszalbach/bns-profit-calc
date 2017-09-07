import React from "react";
import PropTypes from "prop-types";

import "./itemImage.css";
import {Image} from "semantic-ui-react";


export default class ItemImage extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
        count: PropTypes.number
    };


    render() {
        let {name, image, count} = this.props;

        let shownCount = count > 1 ? count : '';

        return image ? <div className="iconCell">
            <Image src={image.replace( 'http:', 'https:' )} alt={name}/>
            <span className="num">{shownCount}</span>
        </div> : <div className="noImage">{shownCount}</div>
    }
}