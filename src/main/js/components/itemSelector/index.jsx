import React from "react";
import Select from 'react-select';
import PropTypes from "prop-types";

import 'react-select/dist/react-select.css';

export default class ItemSelector extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired
    };

    state = {item: ''};

    onChange = ( event ) => {
        let item = event ? event.value + '' : '';
        this.setState( {item: item} );

        this.props.onChange( item )
    };


    render() {
        let itemsAsOptions = this.props.items.map( item => {
            return {value: item.name, label: item.name}
        } );

        return <Select
            value={this.state.item}
            options={itemsAsOptions}
            onChange={this.onChange}
        />
    }
}