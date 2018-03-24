import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { TextInput, Button } from 'react-native-paper';
import api from '../lib/api';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  }

  _handleSubmit() {
    api.post('/user/login', {user: state})
  }

  render() {
    return (
      <View>
        <TextInput
          label='Email'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          label='Password'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <Button raised onPress={() => this._handleSubmit()}>
          Login
        </Button>
    </View>
    )
  }
}

export default LoginScreen;
