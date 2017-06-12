import React from "react";
import PropTypes from "prop-types";

export default class CraftView extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        craftingCost: PropTypes.number.isRequired,
        ahPrice: PropTypes.number.isRequired
    };

    render() {
        let {item, craftingCost, ahPrice} = this.props;
        return (
                <div>
                    <div>
                        <h1>{item.name}</h1>
                        <div>Quantity: {item.quantity}</div>
                        <div>Crafting Fee: {item.cost}</div>
                    </div>

                    <div>
                        <h2>Ingredients</h2>
                        <div>
                            {item.ingredients.map( ingredient =>
                                                           <div key={ingredient.name}>{ingredient.quantity} {ingredient.name}</div>
                            )}
                        </div>
                    </div>

                    <div>
                        <h2>Profit</h2>
                        <div>AH price: {ahPrice}</div>
                        <div>Crafting Cost: {craftingCost}</div>
                        <div>Profit: {(ahPrice * item.quantity) - craftingCost}</div>
                    </div>
                </div>
        )
    }
}