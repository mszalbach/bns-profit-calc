import React from "react";
import PropTypes from "prop-types";
import PriceText from "../../components/priceText/priceText";
import {Input, Label} from "semantic-ui-react";


export default class SmartBid extends React.Component {

    static propTypes = {
        price: PropTypes.number.isRequired,
    };

    state = {
        playersCount: 6,
        itemCount: 1
    };

    playersCountChange = ( event ) => {
        this.setState( {
                           playersCount: Number( event.target.value )
                       } );
    };

    itemCountChange = ( event ) => {
        this.setState( {
                           itemCount: Number( event.target.value )
                       } );
    };


    render() {
        let maxBidPrice = Math.floor( this.state.itemCount * this.props.price * ((this.state.playersCount - 1)
                                                                                 / this.state.playersCount) );
        return <div>

            <Input label='Players:' icon='users' type="number" value={this.state.playersCount}
                   min={2} max={24}
                   onChange={this.playersCountChange}/>
            <Input label='Items:' icon='shopping basket' type="number" value={this.state.itemCount}
                   min={1}
                   onChange={this.itemCountChange}/>
            <Label>Max Bid Price:</Label><PriceText price={maxBidPrice}/>
        </div>
    }
}