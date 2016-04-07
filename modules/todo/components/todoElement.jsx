import React from 'react';

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


export default class TodoElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    deleteItem() {
        this.props.removeItem();
    }
    render() {
        return (
            <li style={elementStyle}>
                <span>{this.props.value}</span>
                <span onClick={() => this.props.removeItem()} style={removeItemStyles}>X</span>
            </li>
        )
    }
}