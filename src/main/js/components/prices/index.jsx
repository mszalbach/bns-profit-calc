import React from "react";
import PropTypes from "prop-types";

import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import PriceEdit from "../../container/priceEdit";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import {Button} from "react-bootstrap";
import ItemImage from "../../container/itemImage";


export default class Prices extends React.Component {
    static propTypes = {
        clearPrices: PropTypes.func.isRequired,
        loadPrices: PropTypes.func.isRequired,
        allPrices: PropTypes.array.isRequired
    };

    priceFormatter( cell, row ) {
        return <PriceEdit name={row.name}/>;
    }

    imageFormatter( cell, row ) {
        return <ItemImage name={cell}/>;
    }

    render() {
        let {allPrices} = this.props;

        let options = {
            sortName: "name",
            sortOrder: "asc"
        };

        return (
            <div>
                <div>Prices are loaded from <a href="http://bns.silveress.ie/home">bns.silveress.ie</a>
                </div>
                <Button onClick={this.props.loadPrices}>Load prices</Button>
                {' '}
                <Button onClick={this.props.clearPrices}>Clear prices</Button>

                <BootstrapTable data={allPrices} striped={true} hover={true} search={true} options={options}>
                    <TableHeaderColumn dataField="name" dataFormat={this.imageFormatter}
                                       width="60px">#</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" isKey={true} dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" dataSort={true}
                                       dataFormat={this.priceFormatter}>Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}