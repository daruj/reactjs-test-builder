var React = require('react');

var elementStyle = {
    padding: '5px',
    position: 'relative',
    borderBottom: '1px solid #ccc'
};

var removeItemStyles = {
    position: 'absolute',
    top: 5,
    right: 5,
    cursor: 'pointer'
};

var TodoElement = React.createClass({
    deleteItem: function() {
        this.props.removeItem();
    },
    render: function() {
        return (
            <li style={elementStyle}>
                <span>{this.props.value}</span>
                <span onClick={this.deleteItem} style={removeItemStyles}>X</span>
            </li>
        )
    }
});

module.exports = TodoElement;