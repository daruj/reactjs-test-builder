/**
 * Created by damianaruj on 3/26/16.
 */
// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');
var TodoInput = require('./components/todoInput.jsx');
var TodoList = require('./components/todoList.jsx');


var App = React.createClass({
    getInitialState: function() {
        return {
            items: []
        }
    },
    addItem: function(value) {
        this.setState({
            items: update(this.state.items, {$push: [value]})
        });
    },
    removeItem: function(index) {
        this.setState({
            items: update(this.state.items, {$splice: [[index, 1]]})
        });
    },
    render: function(){
        return (
            <div>
                <h1>TODO PAGE</h1>
                <TodoInput onAdd={this.addItem} />
                <TodoList items={this.state.items} removeItem={this.removeItem} />
            </div>
        )
    }
});


ReactDOM.render(<App />, document.getElementById('container'));