import React from "react";
import PropTypes from "prop-types";
import PriceEdit from "../../container/priceEdit/index";
import PriceText from "../priceText/index";
import {Panel, Table} from "react-bootstrap";

export default class CraftView extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        totalCraftingCost: PropTypes.number.isRequired,
        profit: PropTypes.number.isRequired
    };

    render() {
        let {item, totalCraftingCost, profit} = this.props;
        return (
                <Panel header={item.name}>
                    <Panel>
                        <Table striped bordered condensed hover fill>
                            <tbody>
                            <tr>
                                <td>Quantity:</td>
                                <td>{item.quantity}</td>
                            </tr>
                            <tr>
                                <td>Crafting Fee:</td>
                                <td><PriceText price={item.cost}/></td>
                            </tr>
                            <tr>
                                <td>AH price:</td>
                                <td><PriceEdit name={item.name}/></td>
                            </tr>
                            <tr>
                                <td>Crafting Cost:</td>
                                <td><PriceText price={totalCraftingCost}/></td>
                            </tr>
                            <tr>
                                <td>Profit:</td>
                                <td><PriceText price={profit} shouldHighlight={true}/></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Panel>

                    <Panel header="Ingredients">
                        <Table striped bordered condensed hover fill>
                            <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {item.ingredients.map( ingredient =>
                                                           <tr key={ingredient.name}>
                                                               <td>{ingredient.name}</td>
                                                               <td>{ingredient.quantity}</td>
                                                               <td><PriceEdit name={ingredient.name}/></td>
                                                           </tr> )}
                            </tbody>
                        </Table>
                    </Panel>
                </Panel>
        )
    }
}