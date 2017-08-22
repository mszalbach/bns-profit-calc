import React from "react";
import PropTypes from "prop-types";
import {Header, Item, Label, List, Table, TableCell, TableRow} from "semantic-ui-react";
import ItemImage from "../../components/itemImage/itemImageContainer";
import PriceText from "../../components/priceText/priceText";
import PriceTextContainer from "../../components/priceText/priceTextContainer";


export default class CraftDetails extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired
    };

    createListItem = ( label, component ) => <List.Item><Label horizontal>{label}</Label>
        <List.Content floated='right'>
            {component}
        </List.Content></List.Item>;


    render() {
        let {item} = this.props;

        return (
            <Item.Group>
                <Item>
                    <Item.Image>
                        <ItemImage name={item.item} count={item.output}/>
                    </Item.Image>
                    <Item.Content>
                        <Item.Header as="a">{item.item}</Item.Header>
                        <Item.Meta>{item.createdBy}</Item.Meta>
                        <Item.Description>
                            <List divided>
                                {this.createListItem( 'Crafting Cost', <PriceText price={item.cost}/> )}
                                {this.createListItem( 'AH Price', <PriceTextContainer name={item.item}/> )}
                                {this.createListItem( 'Total Crafting Cost', <PriceText
                                    price={item.totalCraftingCost}/> )}
                                {this.createListItem( 'Profit', <PriceText shouldHighlight={true}
                                                                           price={item.profit}/> )}
                            </List>
                            <Header as='h4'>Ingredients</Header>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>#</Table.HeaderCell>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Price</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {item.ingredients.map( ingredient => <TableRow key={ingredient.name}>
                                        <TableCell width="1">
                                            <ItemImage name={ingredient.name}
                                                       count={ingredient.quantity}/>
                                        </TableCell>
                                        <TableCell>{ingredient.name}</TableCell>
                                        <TableCell><PriceTextContainer name={ingredient.name}/></TableCell>
                                    </TableRow> )}
                                </Table.Body>
                            </Table>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}
