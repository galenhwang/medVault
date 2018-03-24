import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { TextInput, Button } from 'react-native-paper';
import api from '../lib/api';

class SignUpScreen extends Component {
  state = {
    email: '',
    password: ''
  }

  _handleSubmit() {
    api.post('/user/signup', {user: state})
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center'
      }}>
        <Text>Let&#39;s sign up!</Text>
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
          Signup
        </Button>
    </View>
    )
  }
}

export default SignUpScreen;
