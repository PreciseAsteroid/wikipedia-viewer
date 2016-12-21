var React = require('react');
import {Router, Route, browserHistory} from 'react-router';

var Main = require('../components/Main');
var ItemsContainer = require('../containers/ItemsContainer');


var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <Route path='items' component={ItemsContainer}/>
    </Route>
  </Router>
);

module.exports = routes;
