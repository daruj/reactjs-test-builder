import React from 'react';
import ReactDOM from 'react-dom';

export default class ProductRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.price}</td>
            </tr>
        )
    }
}