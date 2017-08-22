import React from "react";
import MarketTable from "./marketTableContainer";
import ItemSelector from "../../components/itemSelector/itemSelectorContainer";
import SmartBid from "./smartBidContainer";


export default class MarketOverview extends React.Component {

    state = {item: ''};


    onChange = ( value ) => {
        this.setState( {item: value} )
    };

    render() {

        return <div>
            <ItemSelector onChange={this.onChange}/>
            <br/><br/>
            <SmartBid name={this.state.item}/>
            <br/><br/>
            <MarketTable name={this.state.item}/>
        </div>
    }
}