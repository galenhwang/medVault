import BackgroundLocation from './BackgroundLocation';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import { TabNavigator } from 'react-navigation';

export default RootStack = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Background: {
    screen: BackgroundLocation,
  }
},{

});
