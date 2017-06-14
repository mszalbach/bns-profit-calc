import React from "react";
import PropTypes from "prop-types";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import IngredientsTable from "../ingredientsTable/index";
import PriceEdit from "../../container/priceEdit/index";
import PriceText from "../priceText/index";


export default class CraftOverview extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    imageFormatter( cell, row ) {
        return cell ? <img src={cell} alt={row.name}/> : cell;
    }

    priceEditFormatter( cell ) {
        return <PriceEdit name={cell}/>
    }

    priceFormatter( cell ) {
        return <PriceText price={cell}/>
    }

    highlightedPriceFormatter( cell ) {
        return <PriceText shouldHighlight={true} price={cell}/>
    }

    expandComponent( row ) {
        return <IngredientsTable item={row} ingredients={row.ingredients}/>
    }

    render() {
        const options = {
            sortName: "name",
            sortOrder: "asc",
            expandRowBgColor: 'rgb(242, 255, 163)',
            expandBy: 'column'
        };
        let {items} = this.props;
        return (
                <BootstrapTable data={items}
                                striped={true}
                                hover={true}
                                search={ true }
                                options={options}
                                expandableRow={ () => true }
                                expandComponent={ this.expandComponent }
                >
                    <TableHeaderColumn dataField="image" dataFormat={this.imageFormatter}>#</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" isKey={true} dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="profession" dataSort={true}>Profession</TableHeaderColumn>
                    <TableHeaderColumn dataField="quantity">Quantity</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" expandable={ false } dataFormat={this.priceEditFormatter}>AH
                        Price</TableHeaderColumn>
                    <TableHeaderColumn dataField="totalCraftingCost" dataFormat={this.priceFormatter}>Total Crafting
                        Cost</TableHeaderColumn>
                    <TableHeaderColumn dataField="profit" dataFormat={this.highlightedPriceFormatter} dataSort={true}>Profit</TableHeaderColumn>
                </BootstrapTable>
        )
    }
}