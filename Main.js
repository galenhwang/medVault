
import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import SignUpScreen from './src/SignUpScreen';
import FormScreen from './src/FormScreen';
import Logout from './src/Logout';
import RootStack from './src/RootStack';

import api from './lib/api';

class Main extends Component {
  state = {
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
    if (this.props.token) {
      this.setState({loggedIn: true})
    }
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
