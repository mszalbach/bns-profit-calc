import React from "react";


export default class LoadData extends React.Component {

    state = {
        timer: null,
    };
    loadDataFromServer = () => {
        this.props.loadItems();
        this.props.loadPrices();
    };

    componentDidMount() {
        this.loadDataFromServer();
        let timer = setInterval( this.loadDataFromServer, 60 * 1000 );

        this.setState( {timer: timer} );
    }

    componentWillUnmount() {
        this.clearInterval( this.state.timer );
    }

    render() {
        return null;
    }

}