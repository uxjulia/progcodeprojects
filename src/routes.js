import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ProjectCardContainer from './containers/ProjectCardContainer';
import App from './components/App';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectCardContainer}/>
  </Route>
);
