/**
 * Created by damianaruj on 3/26/16.
 */
// main.js
var React = require('react');
var ReactDOM = require('react-dom');


var App = React.createClass({
    getInitialState: function() {
        return {value: 0}
    },
    changeCounterValue: function(newValue){
        if(newValue >= 0) {
            this.setState({value: newValue})
        }
    },
    render: function(){
        return (
            <div>
                <CounterLabel value={this.state.value}/>
                <CounterActions value={this.state.value} onChange={this.changeCounterValue}/>
            </div>
        )
    }
});

var CounterLabel = React.createClass({
    render: function(){
        return (
            <div>
                <span>Counter vale: {this.props.value}</span>
            </div>
        )
    }
});

var CounterActions = React.createClass({
    render: function(){
        return (
            <div>
                <button onClick={this.props.onChange.bind(null, this.props.value + 1)}>Increase</button>
                <button onClick={this.props.onChange.bind(null, this.props.value - 1)}>Decrease</button>
            </div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('container'));