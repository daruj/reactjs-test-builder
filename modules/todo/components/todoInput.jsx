import React from 'react';

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            inputStyles: {}
        }
    }
    updateValue(value) {
        var newState = {
                msg: value,
                inputStyles: {}
            };
        if (!value.length) {
            newState['inputStyles'] = {
                border: '1px solid red'
            }
        }
        this.setState(newState);
    }
    onKeyDown(event) {
        if(event.keyCode == 13) {
            this.submitValue()
        }
    }
    submitValue() {
        if(this.state.msg.length) {
            this.props.onAdd(this.state.msg);
            this.setState({
                msg: ''
            });
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    style={this.state.inputStyles}
                    value={this.state.msg}
                    onChange={() => this.updateValue(this.refs.todoInput.value)}
                    onKeyDown={this.onKeyDown.bind(this)}
                    ref="todoInput"
                />
                <button onClick={() => this.submitValue()} disabled={!this.state.msg.length}>Submit</button>
            </div>
        )

    }
};

