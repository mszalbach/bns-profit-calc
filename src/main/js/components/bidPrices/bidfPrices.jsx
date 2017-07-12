import React from "react";
import {ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import PriceText from "../priceText";
import PriceEdit from "../priceEdit";


export default class BidPrices extends React.Component {

    state = {
        itemCount: 1,
        bidPrice: 100000,
        players: 6
    };

    onChangeCount = ( e ) => {
        this.setState( {itemCount: e.target.value} );
    };

    onChangePrice = ( name, value ) => {
        this.setState( {bidPrice: value} );
    };

    onChangePlayers = ( e ) => {
        this.setState( {players: e.target.value} );
    };

    calculateBidPrice = () => {
        let {itemCount, bidPrice, players} = this.state;
        return Math.floor( itemCount * bidPrice * ((players - 1) / players) );
    };

    countOptions = ( start, end ) => {
        let options = [];
        for ( let i = start; i <= end; i++ ) {
            options.push( <option key={i} value={i}>{i}</option> );
        }
        return options;
    };

    render() {
        return <div><Form inline>
            <FormGroup>
                <ControlLabel>Count</ControlLabel>
                {' '}
                <FormControl bsSize="small"
                             type="number"
                             componentClass="select"
                             value={this.state.itemCount}
                             onChange={this.onChangeCount}>
                    {this.countOptions( 1, 20 )}
                </FormControl>
            </FormGroup>
            {' '}
            <FormGroup>
                <ControlLabel>Price</ControlLabel>
                {' '}
                <PriceEdit name="price" price={this.state.bidPrice} mergePrice={this.onChangePrice}/>
            </FormGroup>
            {' '}
            <FormGroup>
                <ControlLabel>Players</ControlLabel>
                {' '}
                <FormControl bsSize="small"
                             type="number"
                             componentClass="select"
                             value={this.state.players}
                             onChange={this.onChangePlayers}>
                    {this.countOptions( 2, 6 ).reverse()}
                </FormControl>
            </FormGroup>
        </Form>
            <br/>
            <FormGroup>
                <ControlLabel>Max Bid price</ControlLabel>
                {' '}
                <PriceText price={this.calculateBidPrice()}/>
            </FormGroup></div>
    }
}
