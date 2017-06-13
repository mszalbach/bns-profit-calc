import React from "react";
import PropTypes from "prop-types";
import {Table} from "react-bootstrap";

export default class CraftOverview extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        push: PropTypes.func.isRequired
    };

    render() {
        let {items} = this.props;
        return (<Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map( item =>
                                        <tr key={item.name} onClick={ () => this.props.push( item.name )}>
                                            <td>#</td>
                                            <td>{item.name}</td>
                                        </tr> )}
                    </tbody>
                </Table>
        )
    }
}