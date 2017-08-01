import React from "react";


export default class LoadData extends React.Component {

    componentDidMount() {
        this.props.loadItems();
        this.props.loadPrices();
    }

    render() {
        return null;
    }

}