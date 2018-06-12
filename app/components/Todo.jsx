var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {text} = this.props;
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
});

module.exports = Todo;