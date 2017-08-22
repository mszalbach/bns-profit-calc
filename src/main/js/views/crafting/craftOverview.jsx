import React from "react";
import PropTypes from "prop-types";
import PriceText from "../../components/priceText/priceText";
import PriceTextContainer from "../../components/priceText/priceTextContainer";
import ItemImage from "../../components/itemImage/itemImageContainer";
import {Table, TableCell, TableRow} from "semantic-ui-react";


export default class CraftOverview extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    state = {
        column: null,
        direction: null,
    };


    render() {
        let {items} = this.props;
        return (
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Profession</Table.HeaderCell>
                        <Table.HeaderCell>AH Price</Table.HeaderCell>
                        <Table.HeaderCell>Total Crafting Cost</Table.HeaderCell>
                        <Table.HeaderCell>Profit</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {items.map( ( row, index ) =>
                                    <TableRow key={row.item}>
                                        <TableCell width="1"><ItemImage name={row.item}
                                                                        count={row.output}/></TableCell>
                                        <TableCell>{row.item}</TableCell>
                                        <TableCell>{row.createdBy}</TableCell>
                                        <TableCell textAlign="right"><PriceTextContainer
                                            name={row.item}/></TableCell>
                                        <TableCell textAlign="right"><PriceText
                                            price={row.totalCraftingCost}/></TableCell>
                                        <TableCell textAlign="right"><PriceText shouldHighlight={true}
                                                                                price={row.profit}/></TableCell>
                                    </TableRow>
                    )}
                </Table.Body>
            </Table>
        )
    }
}
