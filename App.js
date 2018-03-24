/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import RootStack from './src/RootStack';

export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    );
  }
}
