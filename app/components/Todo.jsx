var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {id, text, completed} = this.props;
        return (
            <div onClick={() => {
                    this.props.onToggle(id)
                }}>
                <label>
                    <input type="checkbox" defaultChecked={completed}/>
                       {text}
                </label>
            </div>
        )
    }
});

module.exports = Todo;