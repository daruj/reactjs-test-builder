import React from 'react';
import ReactDOM from 'react-dom';

const contStyles = {
  marginBottom: '10px'
};

const inputStyles = {
    width: '276px',
    padding: '10px'
};
const labelStyles = {
  textAlign: 'left'
};

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }
    search(value,stocked) {
        this.setState({value: value});
        this.props.onFilter(value,stocked);
    }
    render() {
        return (
            <div style={contStyles}>
                <input type="text"
                       value={this.state.value}
                       onChange={() => this.search(this.refs.searchInput.value,this.refs.filterByStock.checked)}
                       placeholder="Search..."
                       ref="searchInput"
                       style={inputStyles} />
                <div style={labelStyles}>
                    <label>
                        <input type="checkbox" value="" ref="filterByStock" onClick={() =>
                            this.search(this.refs.searchInput.value,this.refs.filterByStock.checked)
                        } />
                        <span>Only show products in stock</span>
                    </label>
                </div>
            </div>
        )
    }
}