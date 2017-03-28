var React = require('react');
var Link = require('react-router-dom').Link;
var $ = require('jquery');

var IndexPage = React.createClass({
  _createUser: function() {
    var username = this.refs.username.value;
    var password = this.refs.password.value;

    // Check if username & password are empty
    if(!username || !password) {
      console.error('Error: No first name/last name provided');
      return;
    }

    // Call the request on the Backend
    $.ajax({
      type: 'POST',
      url: '/api/user',
      data: {
        username: username,
        password: password
      }
    })
    .then(function(response) {
      // Handle success
      console.log('Successful!');
    })
    .fail(function(error) {
      // Handle the error
      console.error(error);
    });
  },

  render: function() {
    return (
      <div>
        <h1>Web App Name</h1>
        <input type="text" placeholder="Username" ref="username" />
        <input type="password" placeholder="Password" ref="password" />
        <button onClick={this._createUser}>Create</button>
        <br /> <br />
        <Link to="/users">Users</Link>
      </div>
    );
  }
});

// NOTE: 100% Make sure that this is here, so that other files can require this
module.exports = IndexPage;
