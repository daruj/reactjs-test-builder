var React = require('react');

var TodoInput = React.createClass({
    getInitialState: function() {
        return {
            msg: '',
            inputStyles: {}
        }
    },
    updateValue: function(e){
        var value = e.target.value,
            newState = {
                msg: value,
                inputStyles: {}
            };
        if (!value.length) {
            newState['inputStyles'] = {
                border: '1px solid red'
            }
        }
        this.setState(newState);
    },
    onKeyDown: function(event) {
        if(event.keyCode == 13) {
            this.submitValue()
        }
    },
    submitValue: function() {
        if(this.state.msg.length) {
            this.props.onAdd(this.state.msg);
            this.setState({
                msg: ''
            });
        }
    },
    render: function() {
        return (
            <div>
                <input
                    type="text"
                    style={this.state.inputStyles}
                    value={this.state.msg}
                    onChange={this.updateValue}
                    onKeyDown={this.onKeyDown}
                />
                <button onClick={this.submitValue} disabled={!this.state.msg.length}>Submit</button>
            </div>
        )

    }
});
module.exports = TodoInput;