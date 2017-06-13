import React from "react";
import PropTypes from "prop-types";
import PriceEdit from "../../container/priceEdit/index";
import PriceText from "../priceText/index";

export default class CraftView extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        ahPrice: PropTypes.number.isRequired,
        totalCraftingCost: PropTypes.number.isRequired,
        profit: PropTypes.number.isRequired
    };

    render() {
        let {item, ahPrice, totalCraftingCost, profit} = this.props;
        return (
                <div>
                    <div>
                        <h1>{item.name}</h1>
                        <div>Quantity: {item.quantity}</div>
                        <div>Crafting Fee: <PriceText price={item.cost}/></div>
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
                        <div>AH price: <PriceText price={ahPrice}/></div>
                        <div>Crafting Cost: <PriceText price={totalCraftingCost}/></div>
                        <div>Profit: <PriceText price={profit}/></div>
                    </div>
                </div>
        )
    }
}