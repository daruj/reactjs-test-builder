var React = require('react');

var TodoInput = React.createClass({
    getInitialState: function() {
        return {
            msg: null
        }
    },
    updateValue: function(e){
        this.setState({
            msg: e.target.value
        })
    },
    onKeyDown: function(event) {
        if(event.keyCode == 13) {
            this.submitValue()
        }
    },
    submitValue: function() {
        if(this.state.msg != null) {
            this.props.onAdd(this.state.msg);
            this.setState({
                msg: null
            });
        }
    },
    render: function() {
        return (
            <div>
                <input type="text" value={this.state.msg} onChange={this.updateValue} onKeyDown={this.onKeyDown} />
                <button onClick={this.submitValue}>Submit</button>
            </div>
        )

    }
});
module.exports = TodoInput;