
import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StackNavigator } from 'react-navigation';


import { connect } from 'react-redux';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import SignUpScreen from './src/SignUpScreen';
import BackgroundLocation from './src/BackgroundLocation';

import RootStack from './src/RootStack';

export const LoginStack = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignUpScreen,
  },
})

class Main extends Component {
  state = {
    loggedIn: false,
    index: 0,
    routes: [
      { key: 'info', title: 'Profile', icon: 'person' },
      { key: 'form', title: 'Edit', icon: 'edit' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    info: HomeScreen,
    form: BackgroundLocation,
  });

  componentDidMount() {
    if (this.props.token) {
      this.setState({loggedIn: true})
    }
  }


  render() {
    if (!this.state.loggedIn) {
      return <LoginStack/>
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
