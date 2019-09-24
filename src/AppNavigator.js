import { createStackNavigator } from 'react-navigation-stack';
import App from './App';
import QRCode from './QRCode';
import MySectionList from './MySectionList';
import MyCalendar from './MyCalendar';
import My from './My';

const AppNavigator = createStackNavigator(
  {
    app: App,
    qrCode: QRCode,
    mySectionList: MySectionList,
    myCalendar: MyCalendar,
    my: My,
  },
  {
    initialRouteName: 'app',
  }
);

export default AppNavigator;
