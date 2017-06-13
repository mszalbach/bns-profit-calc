import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";

export default class CraftOverview extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        let {items} = this.props;
        return (<Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map( item =>
                                        <tr key={item.name}>
                                            <td>#</td>
                                            <td>{item.name}</td>
                                            <td><Link to={"/" + item.name}>-------></Link></td>
                                        </tr> )}
                    </tbody>
                </Table>
        )
    }
}