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

// class AwesomeProject extends Component {
  const AwesomeProject = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
//   render() {
//     return (
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//   }
// }
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
