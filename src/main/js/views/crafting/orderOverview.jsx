import React from "react";
import PropTypes from "prop-types";
import {Header, Label, List} from "semantic-ui-react";
import ItemImage from "../../components/itemImage/itemImageContainer";
import PriceText from "../../components/priceText/priceText";


export default class OrderOverview extends React.Component {

    static propTypes = {
        order: PropTypes.object.isRequired
    };

    createListItem = ( label, component ) => <List.Item><Label horizontal>{label}</Label>
        <List.Content floated='right'>
            {component}
        </List.Content></List.Item>;


    render() {

        const {order} = this.props;

        return <div>
            <Header as='h4'>Order Details</Header>
            <List divided>
                {this.createListItem( 'Crafting Cost', <PriceText price={order.cost}/> )}
                {this.createListItem( 'Total Crafting Cost', <PriceText
                    price={order.totalCraftingCost}/> )}
                {this.createListItem( 'Profit', <PriceText shouldHighlight={true}
                                                           price={order.profit}/> )}
            </List>

            <Header as='h4'>Order Materials</Header>
            <List horizontal>
                {order.ingredients.map( ingredient =>
                                            <List.Item key={ingredient.name}><ItemImage name={ingredient.name}
                                                                                        count={ingredient.quantity}/></List.Item> )}
            </List></div>
    }
}
