
import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import SignUpScreen from './src/SignUpScreen';
import FormScreen from './src/FormScreen';
import Logout from './src/Logout';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';
import RootStack from './src/RootStack';
import api from './lib/api';


class Main extends Component {
  state = {
    longitude: null,
    latitude: null,
    speed: null,
    loggedIn: false,
    index: 0,
    routes: [
      { key: 'info', title: 'Profile', icon: 'person' },
      { key: 'form', title: 'Edit', icon: 'edit' },
      { key: 'logout', title: 'Log Out', icon: 'exit-to-app' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    info: HomeScreen,
    form: FormScreen,
    logout: Logout,
  });

  componentDidMount() {
  }

  componentDidMount() {
    if (this.props.token) {
      this.setState({loggedIn: true})
    }

    BackgroundGeolocation.configure({
      desiredAccuracy: 10,
      stationaryRadius: 50,
      distanceFilter: 50,
      notificationTitle: 'Background tracking',
      notificationText: 'enabled',
      debug: true,
      startOnBoot: true,
      stopOnTerminate: false,
      locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
      interval: 10000,
      fastestInterval: 5000,
      activitiesInterval: 10000,
      stopOnStillActivity: false,
    });

    BackgroundGeolocation.on('location', (location) => {
      console.log(location)

      const { longitude, latitude, speed } = location;
      api.put('/users/location', {latitude: latitude, longitude: longitude}).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

      this.setState({
        longitude: longitude, 
        latitude: latitude, 
        speed: speed
      })
      // handle your locations here
      // to perform long running operation on iOS
      // you need to create background task
      BackgroundGeolocation.startTask(taskKey => {
        // execute long running task
        // eg. ajax post location
        // IMPORTANT: task has to be ended by endTask
        BackgroundGeolocation.endTask(taskKey);
      });
    });

    BackgroundGeolocation.on('stationary', (stationaryLocation) => {
      // handle stationary locations here
      Actions.sendLocation(stationaryLocation);
    });

    BackgroundGeolocation.on('error', (error) => {
      console.log('[ERROR] BackgroundGeolocation error:', error);
    });

    BackgroundGeolocation.on('start', () => {
      console.log('[INFO] BackgroundGeolocation service has been started');
    });

    BackgroundGeolocation.on('stop', () => {
      console.log('[INFO] BackgroundGeolocation service has been stopped');
    });

    BackgroundGeolocation.on('authorization', (status) => {
      console.log('[INFO] BackgroundGeolocation authorization status: ' + status);
      if (status !== BackgroundGeolocation.AUTHORIZED) {
        Alert.alert('Location services are disabled', 'Would you like to open location settings?', [
          { text: 'Yes', onPress: () => BackgroundGeolocation.showLocationSettings() },
          { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' }
        ]);
      }
    });

    BackgroundGeolocation.on('background', () => {
      console.log('[INFO] App is in background');
    });

    BackgroundGeolocation.on('foreground', () => {
      console.log('[INFO] App is in foreground');
    });

    BackgroundGeolocation.checkStatus(status => {
      console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
      console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
      console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);

      // you don't need to check status before start (this is just the example)
      if (!status.isRunning) {
        BackgroundGeolocation.start(); //triggers start on start event
      }
    });

    // you can also just start without checking for status
    // BackgroundGeolocation.start();
  }

  componentWillUnmount() {
    // unregister all event listeners
    BackgroundGeolocation.events.forEach(event => BackgroundGeolocation.removeAllListeners(event));
  }

  render() {
    if (!this.state.loggedIn) {
      return <RootStack/>
    } else {
      return (
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      )
    }
  }
}

export default connect(state => {
  return {
    token: state.token,
  }
})(Main);
