import { createStackNavigator } from 'react-navigation-stack';
import App from './App';
import QRCode from './QRCode';
import MySectionList from './MySectionList';
import MyCalendar from './MyCalendar';

const AppNavigator = createStackNavigator(
  {
    app: App,
    qrCode: QRCode,
    mySectionList: MySectionList,
    myCalendar: MyCalendar,
  },
  {
    initialRouteName: 'app',
  }
);

export default AppNavigator;
