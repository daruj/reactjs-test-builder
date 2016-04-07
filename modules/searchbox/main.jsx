/**
 * Created by damianaruj on 3/26/16.
 */
// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

import SearchBar from './components/searchBar.jsx';
import ProductTable from './components/productTable.jsx';


const styles = {
    width: 300,
    margin: '0 auto'
};

const data = Immutable.List.of(
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: data}
    }
    filterData(value,stocked = false) {
        this.setState({
            data: stocked
                ? data.filter(x=> x.name.toLowerCase().search(value.toLocaleLowerCase()) !== -1 && x.stocked == stocked )
                : data.filter(x=> x.name.toLocaleLowerCase().search(value.toLocaleLowerCase()) !== -1)
        });
    }
    render() {
        return (
            <div style={styles}>
                <h1>SearchBox</h1>
                <SearchBar onFilter={(v,s) => this.filterData(v,s)} />
                <ProductTable items={this.state.data} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('container'));