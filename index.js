/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import './newrelic.config';
AppRegistry.registerComponent(appName, () => App);
