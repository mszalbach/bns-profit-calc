import React from "react";
import {ControlLabel, Form, FormGroup, Table} from "react-bootstrap";
import PropTypes from "prop-types";
import PriceEdit from "../priceEdit";
import PriceText from "../priceText";

import "./bidPrices.css";


export default class BidPrices extends React.Component {

    state = {
        bidPrice: 100000,
    };

    playerHeader = ( start, end ) => {
        let options = [];
        for ( let i = start; i <= end; i++ ) {
            options.push( <th key={i} value={i}>{i}</th> );
        }
        return options;
    };


    onChangePrice = ( name, value ) => {
        this.setState( {bidPrice: value} );
    };


    render() {
        return <div><Form inline>
            <FormGroup>
                <ControlLabel>Price</ControlLabel>
                {' '}
                <PriceEdit name="price" price={this.state.bidPrice} mergePrice={this.onChangePrice}/>
            </FormGroup>
            {' '}
        </Form>
            <br/>
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th># / Players</th>
                    <th className="right">6</th>
                    <th className="right">5</th>
                    <th className="right">4</th>
                    <th className="right">3</th>
                    <th className="right">2</th>
                </tr>
                </thead>
                <tbody>
                {[...new Array( 20 ).keys()].map(
                    i => <BidPriceTableRow key={i} itemPrice={this.state.bidPrice} itemCount={i + 1}/> )}
                </tbody>
            </Table>
        </div>
    }
}

class BidPriceTableRow
    extends React
        .Component {

    static propTypes = {
        itemCount: PropTypes.number.isRequired,
        itemPrice: PropTypes.number.isRequired
    };

    calculateBidPrice = ( playersCount ) => {
        let {itemPrice, itemCount} = this.props;
        return Math.floor( itemCount * itemPrice * ((playersCount - 1) / playersCount) );
    };


    render() {
        return <tr>
            <th>{this.props.itemCount}</th>
            {[...new Array( 5 ).keys()].reverse().map(
                i => <td key={i} className="right"><PriceText price={this.calculateBidPrice( i + 2 )}/></td> )}
        </tr>
    }
}
