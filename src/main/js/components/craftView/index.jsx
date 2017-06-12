import React from "react";
import PropTypes from "prop-types";
import PriceEdit from "../../container/priceEdit/index";

export default class CraftView extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired
    };

    render() {
        let {item, ahPrice} = this.props;
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
                                                           <div key={ingredient.name}>{ingredient.quantity} {ingredient.name}
                                                               <PriceEdit name={ingredient.name}/>
                                                           </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <h2>Profit</h2>
                        <div>AH price: {ahPrice}</div>
                        <div>Crafting Cost: {item.craftingCost}</div>
                        <div>Profit: {(ahPrice * item.quantity) - item.craftingCost}</div>
                    </div>
                </div>
        )
    }
}