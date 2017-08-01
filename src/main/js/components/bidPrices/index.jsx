import React from "react";
import BidPricesTable from "../../container/bidPricesTable";
import ItemSelector from "../../container/itemSelector";


export default class BidPrices extends React.Component {

    state = {
        item: ''
    };


    onChange = ( value ) => {
        this.setState( {item: value} );
    };


    render() {


        return <div>
            <ItemSelector onChange={this.onChange}/>
            <BidPricesTable name={this.state.item}/>
        </div>
    }
}
