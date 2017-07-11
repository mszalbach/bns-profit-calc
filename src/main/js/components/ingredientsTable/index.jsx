import React from "react";
import PropTypes from "prop-types";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import PriceEdit from "../../container/priceEdit/index";


export default class IngredientsTable extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        ingredients: PropTypes.array.isRequired
    };

    priceFormatter( cell ) {
        return <PriceEdit name={cell}/>
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
            <TableHeaderColumn dataField="name" isKey={true} dataSort={true}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField="quantity" dataAlign="right">Quantity</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataAlign="right"
                               dataFormat={this.priceFormatter}>Price</TableHeaderColumn>
        </BootstrapTable>
    }
}