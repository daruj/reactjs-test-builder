/**
 * Created by damianaruj on 3/26/16.
 */
// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';
import TodoInput from './components/todoInput.jsx';
import TodoList from './components/todoList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    addItem(value) {
        this.setState({
            items: update(this.state.items, {$push: [value]})
        });
    }
    removeItem(index) {
        this.setState({
            items: update(this.state.items, {$splice: [[index, 1]]})
        });
    }
    render(){
        return (
            <div>
                <h1>TODO PAGE</h1>
                <TodoInput onAdd={(value) => this.addItem(value)} />
                <TodoList items={this.state.items} removeItem={() => this.removeItem()} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('container'));