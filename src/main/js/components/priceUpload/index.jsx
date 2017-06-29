import React from "react";
import PropTypes from "prop-types";
import {Button, FormGroup} from "react-bootstrap";
import validator from "validator";


export default class PriceUpload extends React.Component {
    static propTypes = {
        updatePrices: PropTypes.func.isRequired
    };

    state = {
        prices: "",
        valid: false,
    };

    onChange = ( e ) => {
        this.setState( {prices: e.target.value} );
        this.setState( {valid: validator.isJSON( e.target.value )} );

    };

    onClick = () => {
        this.props.updatePrices( JSON.parse( this.state.prices ) );
    };

    render() {
        return (
                <div>
                    <div>You can upload the prices from <a href="http://api.silveress.ie/bns/market/EU.json">ap.silveress.ie</a>.
                    </div>
                    <br />
                    <form>
                        <FormGroup>
                            <textarea rows="4" cols="50" onChange={this.onChange} value={this.state.prices}/>
                        </FormGroup>
                        <Button disabled={!this.state.valid} onClick={this.onClick}>Submit</Button>
                    </form>
                </div>
        )
    }
}