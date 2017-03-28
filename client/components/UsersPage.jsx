var React = require('react');
var $ = require('jquery');

var UsersPage = React.createClass({
  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    var self = this;
    $.get('/api/user')
    .then(function(response) {
      self.setState({
        users: response.users
      });
    })
    .fail(function(error) {
      console.error(error);
    });
  },

  render: function() {
    var users = this.state.users;
    console.log(users);
    var elements = [];
    for(var k = 0; k < users.length; ++k) {
      var user = users[k];
      elements.push(<div>{user.username + ' ' + user.password}</div>);
    }

    return (
      <div>
        <h1>Users</h1>
        { elements }
      </div>
    );
  }
});

// NOTE: 100% Make sure that this is here, so that other files can require this
module.exports = UsersPage;
