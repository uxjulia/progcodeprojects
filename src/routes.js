import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CardLayoutPage from './containers/CardLayoutPage'; // eslint-disable-line import/no-named-as-default
import App from './components/App';
import CardLayout from './components/CardLayout';
import Card from './components/Card';
import Project from './components/Project';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={CardLayoutPage}/>
  </Route>
);
