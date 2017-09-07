import React from "react";
import CraftTable from "./craftTableContainer";
import CraftDetailsModal from "./craftDetailsModal";


export default class CraftOverview extends React.Component {


    state = {modalOpen: false, modalItem: undefined};
    handleOpen = ( item ) => this.setState( {modalOpen: true, modalItem: item} );

    handleClose = () => this.setState( {modalOpen: false, modalItem: undefined} );

    render() {
        return (
            <div>
                <CraftTable itemSelected={this.handleOpen}/>
                <CraftDetailsModal open={this.state.modalOpen} onClose={this.handleClose} item={this.state.modalItem}/>
            </div>
        )
    }
}
