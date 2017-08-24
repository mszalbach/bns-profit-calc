import React from "react";
import PropTypes from "prop-types";
import CraftDetails from "./craftDetailsContainer";
import {Modal} from "semantic-ui-react";

export default class CraftDetailsModal extends React.Component {

    static propTypes = {
        item: PropTypes.string,
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired
    };

    render() {
        return (
            <Modal open={this.props.open} onClose={this.props.onClose}>
                <Modal.Header>{this.props.item} Details</Modal.Header>
                <Modal.Content image>
                    <CraftDetails name={this.props.item}/>
                </Modal.Content>
            </Modal>
        )
    }
}