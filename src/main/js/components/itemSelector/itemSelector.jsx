import React from "react";
import {Search} from "semantic-ui-react";
import PropTypes from "prop-types";

export default class ItemSelector extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired
    };


    componentWillMount() {
        this.resetComponent()
    }

    resetComponent() {
        this.setState( {isLoading: false, results: [], value: ''} )
    };

    handleResultSelect = ( e, {result} ) => {
        this.setState( {value: result.title} );
        this.props.onChange( result.title );

    };


    handleSearchChange = ( e, {value} ) => {
        this.setState( {isLoading: true, value} );

        setTimeout( () => {
            if ( this.state.value.length < 1 ) {
                return this.resetComponent()
            }

            let itemsAsOptions = this.props.items.map( item => {
                return {title: item.name}
            } );

            const isMatch = ( result ) => result.title.toLowerCase().startsWith( this.state.value.toLowerCase() );


            this.setState( {
                               isLoading: false,
                               results: itemsAsOptions.filter( item => isMatch( item ) ),
                           } )
        }, 500 )
    };

    render() {
        const {isLoading, value, results} = this.state;

        return (
            <Search fluid
                    selectFirstResult
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={this.handleSearchChange}
                    results={results}
                    value={value}
            />
        )
    }
}