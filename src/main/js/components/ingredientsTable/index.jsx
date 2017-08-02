import React from "react";
import PropTypes from "prop-types";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import PriceText from "../../container/priceText";
import ItemImage from "../../container/itemImage";


export default class IngredientsTable extends React.Component {

    static propTypes = {
        ingredients: PropTypes.array.isRequired
    };

    imageFormatter( cell, row ) {
        return <ItemImage name={row.name} count={cell}/>;
    }

    priceFormatter( cell ) {
        return <PriceText name={cell}/>
    }

    render() {
        const options = {
            sortName: "name",
            sortOrder: "asc"
        };

        let {ingredients} = this.props;
        return <BootstrapTable data={ingredients}
                               striped={true}
                               hover={true}
                               options={options}
        >
            <TableHeaderColumn dataField="quantity" dataFormat={this.imageFormatter} width="60px">#</TableHeaderColumn>
            <TableHeaderColumn dataField="name" isKey={true} dataSort={true}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataAlign="right"
                               dataFormat={this.priceFormatter}>Price</TableHeaderColumn>
        </BootstrapTable>
    }
}