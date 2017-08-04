import React from "react";
import PropTypes from "prop-types";

import "./itemImage.css";


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
            <img src={image.replace( 'http:', 'https:' )} alt={name} className="iconImage"/>
            <span className="num">{shownCount}</span>
        </div> : <div className="noImage">{shownCount}</div>
    }
}