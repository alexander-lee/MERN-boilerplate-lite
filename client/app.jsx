var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var createBrowserHistory = require('history').createBrowserHistory;

var IndexPage = require('./components/IndexPage.jsx');
var UsersPage = require('./components/UsersPage.jsx');

var history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route exact path="/" component={IndexPage} />
      <Route path="/users" component={UsersPage} />
    </div>
  </Router>,
  document.getElementById('content')
);
