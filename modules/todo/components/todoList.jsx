import React from 'react';
import TodoElement from './todoElement.jsx';

var elementStyles = {
    listStyle: 'none',
    padding: 0,
    display: 'inline-block',
    width: 300,
    margin: '20px auto'
};

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var _self = this;

        if (this.props.items.length) {
            elementStyles['border'] = '1px solid #ccc';
            elementStyles['borderBottom'] = 'none';
        } else {
            delete elementStyles['border'];
            delete elementStyles['borderBottom'];
        }
        return (
            <div><ul style={JSON.parse(JSON.stringify(elementStyles))}>
                {this.props.items.map(function(item,index) {
                    return <TodoElement removeItem={() => _self.props.removeItem(index)} key={index} value={item} />;
                })}
            </ul></div>)
    }
}