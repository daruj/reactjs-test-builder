var React = require('react');
var TodoElement = require('./todoElement.jsx');

var elementStyles = {
    listStyle: 'none',
    padding: 0,
    display: 'inline-block',
    width: 300,
    margin: '20px auto'
};

var TodoList = React.createClass({
    render: function() {
        var _self = this;
        if (this.props.items.length) {
            elementStyles['border'] = '1px solid #ccc';
            elementStyles['borderBottom'] = 'none';
        } else {
            delete elementStyles['border'];
        }
        return (
            <div><ul style={JSON.parse(JSON.stringify(elementStyles))}>
                {this.props.items.map(function(item,index) {
                    return <TodoElement removeItem={_self.props.removeItem.bind(null,index)} key={index} value={item} />;
                })}
            </ul></div>)
    }
});

module.exports = TodoList;