import React from "react";
import MarketTable from "./marketTableContainer";
import ItemSelector from "../../components/itemSelector/itemSelectorContainer";

import 'react-select/dist/react-select.css';


export default class MarketOverview extends React.PureComponent {

    state = {item: ''};


    onChange = ( value ) => {
        this.setState( {item: value} )
    };

    render() {

        return <div>
            <ItemSelector onChange={this.onChange}/>
            <br/><br/>
            <MarketTable name={this.state.item}/>
        </div>
    }
}