import React from "react";
import PropTypes from "prop-types";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import IngredientsTable from "./ingredientsTable";
import PriceText from "../../components/priceText/priceText";
import PriceTextContainer from "../../components/priceText/priceTextContainer";
import ItemImage from "../../components/itemImage/itemImageContainer";


export default class CraftOverview extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    imageFormatter( cell, row ) {
        return <ItemImage name={row.item} count={cell}/>;
    }

    priceEditFormatter( cell ) {
        return <PriceTextContainer name={cell}/>
    }

    priceFormatter( cell ) {
        return <PriceText price={cell}/>
    }

    highlightedPriceFormatter( cell ) {
        return <PriceText shouldHighlight={true} price={cell}/>
    }

    expandComponent( row ) {
        return <IngredientsTable ingredients={row.ingredients}/>
    }

    render() {
        const options = {
            sortName: "item",
            sortOrder: "asc",
            expandRowBgColor: 'rgb(242, 255, 163)',
            expandBy: 'column'
        };
        let {items} = this.props;
        return (
            <BootstrapTable data={items}
                            striped={true}
                            hover={true}
                            search={true}
                            options={options}
                            expandableRow={() => true}
                            expandComponent={this.expandComponent}
            >
                <TableHeaderColumn dataField="output" dataFormat={this.imageFormatter}
                                   width="60px">#</TableHeaderColumn>
                <TableHeaderColumn dataField="item" isKey={true} dataSort={true}
                                   width="400px">Name</TableHeaderColumn>
                <TableHeaderColumn dataField="createdBy" dataSort={true}>Profession</TableHeaderColumn>
                <TableHeaderColumn dataField="cost" dataAlign="right" dataFormat={this.priceFormatter}>Crafting
                    Cost</TableHeaderColumn>
                <TableHeaderColumn dataField="item" dataFormat={this.priceEditFormatter}
                                   dataAlign="right">AH Price</TableHeaderColumn>
                <TableHeaderColumn dataField="totalCraftingCost" dataAlign="right" dataFormat={this.priceFormatter}>Total
                    Crafting
                    Cost</TableHeaderColumn>
                <TableHeaderColumn dataField="profit" dataAlign="right" dataFormat={this.highlightedPriceFormatter}
                                   dataSort={true}>Profit</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}
