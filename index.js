/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { createAppContainer } from 'react-navigation';
import App from './src/App';
import { name as appName } from './app.json';
import AppNavigator from './src/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);
AppRegistry.registerComponent(appName, () => AppContainer);
