
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';
import api from '../lib/api';

export default class HomeScreen extends Component {
  state = {
    longitude: null,
    latitude: null,
    speed: null,
    success: false,
    response: '',
  }

  componentDidMount() {
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
        if (res.data.patient) {
          this.setState({success: true, response: res.data})
        } else {
          this.setState({success: false})
        }
        console.log(res)
      }).catch(err => {
        this.setState({success: false})
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
    if (this.state.success) {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>
            Your Medical Information:
          </Text>
          <Text style={styles.fields}>
            Name: Jane Doe
          </Text>
          <Text style={styles.fields}>
            Age: 28
          </Text>
          <Text style={styles.fields}>
            Allergies: Dairy, Egg, Peanut
          </Text>
          <Text style={styles.fields}>
            Prescriptions: Lisinopril, Simvastatin
          </Text>
          <Text style={styles.fields}>
            History: Asthma, Heart disease
          </Text>
          <Text style={styles.fields}>
            Medical Record Number: 2940915
          </Text>
          <Text style={styles.fields}>
            Height (inches): 63
          </Text>
          <Text style={styles.fields}>
            Weight (pounds): 110
          </Text>
        </ScrollView>
      )
    } else {
      return <View style={styles.container}><Text>No Data</Text></View>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
});
