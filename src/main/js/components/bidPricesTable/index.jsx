import React from "react";
import PropTypes from "prop-types";
import PriceText from "../priceText";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";


export default class BidPricesTable extends React.Component {


    static propTypes = {
        name: PropTypes.string.isRequired
    };

    priceFormatter( cell ) {
        return <PriceText price={cell}/>
    }

    calculateBidPrices = () => {
        return [...new Array( 20 ).keys()].map( i => {
            return {
                itemCount: i + 1,
                players2Price: Math.floor( (i + 1) * this.props.price * (1 / 2) ),
                players3Price: Math.floor( (i + 1) * this.props.price * (2 / 3) ),
                players4Price: Math.floor( (i + 1) * this.props.price * (3 / 4) ),
                players5Price: Math.floor( (i + 1) * this.props.price * (4 / 5) ),
                players6Price: Math.floor( (i + 1) * this.props.price * (5 / 6) )
            }
        } );
    };

    render() {


        return <BootstrapTable data={this.calculateBidPrices()}
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
    }
}
