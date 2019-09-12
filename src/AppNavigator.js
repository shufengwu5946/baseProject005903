import { createStackNavigator } from 'react-navigation-stack';
import App from './App';
import QRCode from './QRCode';

const AppNavigator = createStackNavigator(
  {
    app: App,
    qrCode: QRCode,
  },
  {
    initialRouteName: 'app',
  }
);

export default AppNavigator;
