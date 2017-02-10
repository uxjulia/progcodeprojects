/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
require('./favicon.ico');

import './styles/main.scss';



render(
  <Router history={browserHistory} routes={routes} />, document.querySelector('#app')
);
