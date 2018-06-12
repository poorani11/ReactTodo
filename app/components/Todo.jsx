var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var renderDate = () => {
            var message = 'Created';
            var timestamp = createdAt;
            
            if(completed) {
                message = 'Completed' ;
                timestamp = completedAt;
            }
            
            return message + ' ' + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        }
        return (
            <div onClick={() => {
                    this.props.onToggle(id)
                }}>
                <label>
                    <input type="checkbox" defaultChecked={completed}/>
                    <p>{text}</p>
                    <p>{renderDate()}</p>
                </label>
            </div>
        )
    }
});

module.exports = Todo;