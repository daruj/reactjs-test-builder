import React from 'react';
import ReactDOM from 'react-dom';

export default class ProductRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.item !== nextProps.item
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