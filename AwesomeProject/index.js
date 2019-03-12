/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './src/utilities/store.util';
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

  const AwesomeProject = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
