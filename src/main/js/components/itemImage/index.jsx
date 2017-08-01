import React from "react";
import PropTypes from "prop-types";


export default class ItemImage extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        image: PropTypes.string
    };


    render() {
        let {name, image} = this.props;
        return image ? <img src={image} alt={name} height="40"/> : <div style={{minHeight: '40px'}}/>
    }
}