import React from "react";
import PropTypes from "prop-types";
import {Loader, Message} from "semantic-ui-react";


export default class LoadingComponent extends React.Component {

    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        timedOut: PropTypes.bool.isRequired,
        pastDelay: PropTypes.bool.isRequired,
        error: PropTypes.any
    };


    render() {
        let {isLoading, timedOut, pastDelay, error} = this.props;

        if ( isLoading ) {
            // While our other component is loading...
            if ( timedOut ) {
                // In case we've timed out loading our other component.
                return <Message warning>
                    <Message.Header>
                        Component timed out
                    </Message.Header>
                    <p>Loading takes longer as expected.</p>
                    <p>Please refresh the Browser.</p>

                </Message>;
            } else if ( pastDelay ) {
                // Display a loading screen after a set delay.
                return <Loader active/>
                    ;
            } else {
                // Don't flash "Loading..." when we don't need to.
                return null;
            }
        } else if ( error ) {
            // If we aren't loading, maybe
            return <Message negative>
                <Message.Header>
                    Error while loading Component
                </Message.Header>
                <p>Component could not be loaded.</p>
                <p>{JSON.stringify( error )}</p>
            </Message>;
        } else {
            // This case shouldn't happen... but we'll return null anyways.
            return null;
        }
    }
}