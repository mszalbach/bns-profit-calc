import React from "react";
import PropTypes from "prop-types";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";


export default class CraftOverview extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        push: PropTypes.func.isRequired
    };

    selectRowProp = {
        mode: 'radio',
        onSelect: ( row ) => this.props.push( row.name ),
        hideSelectColumn: true,
        clickToSelect: true
    };

    imageFormatter( cell, row ) {
        return cell ? `<img src="${cell}" alt="${row.name}"/>` : cell;
    }


    render() {
        let {items} = this.props;
        return (
                <BootstrapTable data={items} striped={true} hover={true} search={ true } selectRow={this.selectRowProp}>
                    <TableHeaderColumn dataField="image" dataFormat={this.imageFormatter}>#</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" isKey={true} dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="profession" dataSort={true}>Profession</TableHeaderColumn>
                    <TableHeaderColumn dataField="quantity">Quantity</TableHeaderColumn>
                </BootstrapTable>
        )
    }
}