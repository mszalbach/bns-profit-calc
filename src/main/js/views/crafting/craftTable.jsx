import React from "react";
import PropTypes from "prop-types";
import {Icon, Table, TableCell, TableRow} from "semantic-ui-react";
import PriceText from "../../components/priceText/priceText";
import PriceTextContainer from "../../components/priceText/priceTextContainer";
import ItemImage from "../../components/itemImage/itemImageContainer";


export default class CraftTable extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        itemSelected: PropTypes.func,
    };


    selectItem = ( item ) => {
        this.props.itemSelected( item )
    };

    render() {
        let {items} = this.props;
        return (
            <div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Profession</Table.HeaderCell>
                            <Table.HeaderCell>AH Price</Table.HeaderCell>
                            <Table.HeaderCell>Profit</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {items.map( ( row, index ) =>
                                        <TableRow key={row.item}>
                                            <TableCell>
                                                <ItemImage name={row.item}
                                                           count={row.output}/>
                                            </TableCell>
                                            <TableCell>{row.item}</TableCell>
                                            <TableCell>{row.createdBy}</TableCell>
                                            <TableCell textAlign="right"><PriceTextContainer
                                                name={row.item}/></TableCell>
                                            <TableCell textAlign="right"><PriceText shouldHighlight={true}
                                                                                    price={row.profit}/></TableCell>
                                            <TableCell selectable><Icon name='chevron right' size="big"
                                                                        onClick={() => this.selectItem(
                                                                            row.item )}/></TableCell>
                                        </TableRow>
                        )}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}
