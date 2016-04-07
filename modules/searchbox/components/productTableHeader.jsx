import React from 'react';
import ReactDOM from 'react-dom';


export default class ProductTableHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <thead>
                <tr>
                    <th><strong>Name</strong></th>
                    <th><strong>Price</strong></th>
                </tr>
            </thead>
        )
    }
}