import BackgroundLocation from './BackgroundLocation';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import Logout from './Logout';
import Main from '../Main';
import { StackNavigator } from 'react-navigation';

export default RootStack = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Logout: {
    screen: Logout,
  },
  Signup: {
    screen: SignUpScreen,
  },
  Home: {
    screen: Main,
  },
},{

});
