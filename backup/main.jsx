/**
 * Created by damianaruj on 3/26/16.
 */
// main.js
var React = require('react');
var ReactDOM = require('react-dom');


var App = React.createClass({
    getInitialState: function() {
        return {}
    },
    render: function(){
        return (
            <div>Let's Start</div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('container'));