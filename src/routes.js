import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CardsContainer from './containers/CardsContainer'; // eslint-disable-line import/no-named-as-default
import App from './components/App';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={CardsContainer}/>
  </Route>
);
