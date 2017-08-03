import React from "react";
import PropTypes from "prop-types";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import PriceText from "../shared/priceText";
import ItemImage from "../shared/itemImageContainer";

import "react-bootstrap-table/dist/react-bootstrap-table.min.css";


export default class MarketTable extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        listings: PropTypes.array
    };


    imageFormatter( cell, row ) {
        return <ItemImage name={row.name} count={cell}/>;
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

            <TableHeaderColumn width="60px" dataField="count"
                               dataFormat={this.imageFormatter}>#</TableHeaderColumn>
            <TableHeaderColumn dataField="name" isKey={true}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField="itemPrice" dataAlign="right"
                               dataFormat={this.priceFormatter}>Price</TableHeaderColumn>
            <TableHeaderColumn dataField="price" dataAlign="right" dataFormat={this.priceFormatter}>Total
                Price</TableHeaderColumn>
        </BootstrapTable>
    }
}