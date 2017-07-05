import React from "react";
import PropTypes from "prop-types";

import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import PriceEdit from "../../container/priceEdit/index";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import {Button} from "react-bootstrap";


export default class Prices extends React.Component {
    static propTypes = {
        clearPrices: PropTypes.func.isRequired
    };

    priceFormatter( cell, row ) {
        return <PriceEdit name={row.name}/>;
    }

    render() {
        let {allPrices} = this.props;

        let options = {
            sortName: "name",
            sortOrder: "asc"
        };

        return (
                <div>
                    <Button onClick={this.props.clearPrices}>Clear prices</Button>

                    <BootstrapTable data={allPrices} striped={true} hover={true} search={true} options={options}>
                        <TableHeaderColumn dataField="name" isKey={true} dataSort={true}>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField="price" dataSort={true}
                                           dataFormat={this.priceFormatter}>Price</TableHeaderColumn>
                    </BootstrapTable>
                </div>
        )
    }
}