import React from "react";
import PropTypes from "prop-types";
import PriceText from "../../components/priceText/priceText";
import {ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";


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
            <Form inline>
                <FormGroup controlId="formInlineName">
                    <ControlLabel>Players in Party:</ControlLabel>
                    {' '}
                    <FormControl type="number" min={2} max={24} value={this.state.playersCount}
                                 onChange={this.playersCountChange}/>
                </FormGroup>
                <FormGroup controlId="formInlineName">
                    <ControlLabel>Item quantity:</ControlLabel>
                    {' '}
                    <FormControl type="number" min={1} value={this.state.itemCount} onChange={this.itemCountChange}/>
                </FormGroup>
                <FormGroup controlId="formInlineName">
                    <ControlLabel>Max bid price:</ControlLabel>
                    {' '}
                    <PriceText price={maxBidPrice}/>
                </FormGroup>
            </Form>
        </div>
    }
}