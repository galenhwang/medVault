import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Logout extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'LOGOUT_USER'})
    this.props.navigation.navigate("Login")
  }
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect()(Logout);
