import BackgroundLocation from './BackgroundLocation';
import HomeScreen from './HomeScreen';
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
