import React from "react";
import PropTypes from "prop-types";

export default class PriceEdit extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        changePrice: PropTypes.func.isRequired,
        price: PropTypes.number,
    };

    state = {
        shownPrice: this.props.price,
        editing: false
    };


    onChange = ( e ) => {
        this.setState( {shownPrice: e.target.value} );
    };

    checkEnter = ( e ) => {
        if ( e.key === 'Enter' ) {
            this.finishEdit( e );
        }
    };

    finishEdit = ( e ) => {
        const value = e.target.value;
        this.setState( {editing: false} );
        if ( this.props.changePrice ) {
            this.props.changePrice( this.props.name, value );
        }
    };

    startEdit = () => {
        this.setState( {editing: true} );
    };

    render() {

        if ( this.state.editing ) {
            return <input type="number" autoFocus={true}
                          onBlur={this.finishEdit}
                          onKeyPress={this.checkEnter}
                          value={this.state.shownPrice}
                          onChange={this.onChange}/>;
        }

        return <span onClick={this.startEdit}>{this.state.shownPrice}</span>;
    }
}