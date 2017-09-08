import React from "react";
import PropTypes from "prop-types";
import {Header, Item, Label, List, Tab} from "semantic-ui-react";
import ItemImage from "../../components/itemImage/itemImageContainer";
import PriceTextContainer from "../../components/priceText/priceTextContainer";
import OrderOverview from "./orderOverview";


export default class CraftDetails extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired
    };

    createListItem = ( label, component ) => <List.Item><Label horizontal>{label}</Label>
        <List.Content floated='right'>
            {component}
        </List.Content></List.Item>;

    render() {

        const {item} = this.props;

        const panes = item.orders.map( order => {
                                           return {
                                               menuItem: order.output + ' / ' + order.duration,
                                               render: () => <Tab.Pane> <OrderOverview order={order}/></Tab.Pane>
                                           }
                                       }
        );

        return <Item.Group>
            <Item>
                <Item.Image>
                    <ItemImage name={item.item}/>
                </Item.Image>
                <Item.Content>
                    <Item.Header as="a">{item.item}</Item.Header>
                    <Item.Meta>{item.createdBy}</Item.Meta>
                    <Item.Description>
                        <List divided>
                            {this.createListItem( 'AH Price', <PriceTextContainer name={item.item}/> )}
                        </List>
                        <Header as='h4'>Orders</Header>
                        <Tab panes={panes}/>
                    </Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
    }
}
