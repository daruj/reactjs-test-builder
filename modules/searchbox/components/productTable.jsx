import React from 'react';
import ReactDOM from 'react-dom';

import ProductRow from './productRow.jsx'
import ProductTableHeader from './productTableHeader.jsx';

const styles = {
    width: '100%'
};

export default class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <table style={styles}>
                <ProductTableHeader />
                <tbody>
                    {this.props.items.map(function(item,index) {
                        return <ProductRow key={index} item={item} />;
                    })}
                </tbody>
            </table>
        )
    }
}