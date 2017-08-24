import React from "react";
import PropTypes from "prop-types";
import {Table, TableCell, TableRow} from "semantic-ui-react";
import PriceText from "../../components/priceText/priceText";
import ItemImage from "../../components/itemImage/itemImageContainer";


export default class MarketTable extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        listings: PropTypes.array
    };



    render() {
        let {listings} = this.props;

        return <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>#</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Total Price</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {listings.map( ( row, index ) =>
                                   <TableRow key={index}>
                                       <TableCell width="1"><ItemImage name={row.name} count={row.count}/></TableCell>
                                       <TableCell>{row.name}</TableCell>
                                       <TableCell textAlign="right"><PriceText name={row.name}
                                                                               price={row.itemPrice}/></TableCell>
                                       <TableCell textAlign="right"><PriceText name={row.name}
                                                                               price={row.price}/></TableCell>
                                   </TableRow>
                )}
            </Table.Body>
        </Table>
    }
}