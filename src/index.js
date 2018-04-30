import React from 'react';
import { render } from 'react-dom';
import DevTools from 'mobx-react-devtools';
import App from './containers/app';
import './main.scss';

import Store from './store';

window.store = new Store();

window.basemaps = require('./configs/basemaps.json');
window.config = require('./configs/config.json');

store.changeTopBaseMap(basemaps[0].id);
store.changeBottomBaseMap(basemaps[1].id);

window.DEVELOPMENT = process.env.NODE_ENV === 'development';
console.log(DEVELOPMENT);

render(
  <div id="app">
    {DEVELOPMENT && <DevTools />}
    <App />
  </div>,
  document.body.appendChild(document.createElement('div'))
);
