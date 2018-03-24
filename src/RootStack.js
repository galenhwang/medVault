import BackgroundLocation from './BackgroundLocation';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import { TabNavigator } from 'react-navigation';

export default RootStack = TabNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Background: {
    screen: BackgroundLocation,
  }
},{

});
