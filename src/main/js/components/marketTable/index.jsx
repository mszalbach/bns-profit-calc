import React from "react";
import PropTypes from "prop-types";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import PriceText from "../priceText";
import ItemImage from "../../container/itemImage";

import "./marketTable.css";


export default class MarketTable extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        listings: PropTypes.array
    };


    imageFormatter( cell, row ) {
        return <div className="iconCell"><ItemImage name={row.name}/><span className="num">{cell}</span></div>;
    }

    priceFormatter( cell, row ) {
        return <PriceText name={row.name} price={cell}/>
    }

    render() {

        let {listings} = this.props;
        return <BootstrapTable data={listings}
                               striped={true}
                               hover={true}
        >

            <TableHeaderColumn width="60px" dataField="count" dataAlign="right"
                               dataFormat={this.imageFormatter}>Count</TableHeaderColumn>
            <TableHeaderColumn dataField="name" isKey={true}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField="itemPrice" dataAlign="right"
                               dataFormat={this.priceFormatter}>Price</TableHeaderColumn>
            <TableHeaderColumn dataField="price" dataAlign="right" dataFormat={this.priceFormatter}>Total
                Price</TableHeaderColumn>
        </BootstrapTable>
    }
}