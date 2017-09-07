import React from "react";
import PropTypes from "prop-types";
import {Button, Modal} from "semantic-ui-react";
import CraftDetails from "./craftDetailsContainer";

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
                <Modal.Actions>
                    <Button color='red' onClick={this.props.onClose}>Close</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}