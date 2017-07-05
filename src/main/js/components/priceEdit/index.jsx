import React from "react";
import PropTypes from "prop-types";
import PriceText from "../priceText/index";
import {FormControl} from "react-bootstrap";

export default class PriceEdit extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        mergePrice: PropTypes.func.isRequired,
        price: PropTypes.number,
    };

    state = {
        editing: false
    };

    checkEnter = ( e ) => {
        if ( e.key === 'Enter' ) {
            this.finishEdit( e );
        }
    };

    finishEdit = ( e ) => {
        const value = Number( e.target.value );
        this.setState( {editing: false} );
        this.props.mergePrice( this.props.name, value );
    };

    startEdit = () => {
        this.setState( {editing: true} );
    };

    render() {

        if ( this.state.editing ) {
            return <FormControl bsSize="small"
                                type="number"
                                autoFocus={true}
                                onBlur={this.finishEdit}
                                onKeyPress={this.checkEnter}
                                defaultValue={this.props.price}/>;
        }

        return <span>
            <PriceText price={this.props.price}/>
            {' '}
            <span onClick={this.startEdit} className="glyphicon glyphicon-pencil"/>
        </span>;
    }
}