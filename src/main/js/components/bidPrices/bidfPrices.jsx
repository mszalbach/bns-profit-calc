import React from "react";
import {ControlLabel, Form, FormGroup} from "react-bootstrap";
import PriceEdit from "../priceEdit";
import PriceText from "../priceText";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";


export default class BidPrices extends React.Component {

    state = {
        itemPrice: 100000,
    };


    onChangePrice = ( name, value ) => {
        this.setState( {itemPrice: value} );
    };

    priceFormatter( cell ) {
        return <PriceText price={cell}/>
    }

    calculateBidPrices = () => {
        return [...new Array( 20 ).keys()].map( i => {
            return {
                itemCount: i + 1,
                players2Price: Math.floor( (i + 1) * this.state.itemPrice * (1 / 2) ),
                players3Price: Math.floor( (i + 1) * this.state.itemPrice * (2 / 3) ),
                players4Price: Math.floor( (i + 1) * this.state.itemPrice * (3 / 4) ),
                players5Price: Math.floor( (i + 1) * this.state.itemPrice * (4 / 5) ),
                players6Price: Math.floor( (i + 1) * this.state.itemPrice * (5 / 6) )
            }
        } );
    };

    render() {


        return <div><Form inline>
            <FormGroup>
                <ControlLabel>Price</ControlLabel>
                {' '}
                <PriceEdit name="price" price={this.state.itemPrice} mergePrice={this.onChangePrice}/>
            </FormGroup>
            {' '}
        </Form>
            <br/>
            <BootstrapTable data={this.calculateBidPrices()}
                            striped={true}
                            hover={true}
            >
                <TableHeaderColumn dataField="itemCount" isKey={true} tdStyle={ {fontWeight: 'bold'} }
                                   dataAlign="right">#</TableHeaderColumn>
                {[...new Array( 5 ).keys()].reverse().map(
                    players => <TableHeaderColumn key={players} dataField={"players" + (players + 2) + "Price"}
                                                  dataFormat={this.priceFormatter} dataAlign="right">{(players + 2)
                                                                                                      + " Players"}
                    </TableHeaderColumn> )}
            </BootstrapTable>
        </div>
    }
}
