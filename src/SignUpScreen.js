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
    api.post('/users/signup', {user: this.state})
    .then(res => {
      console.log(res.data)
      this.props.dispatch({
        type: 'SIGNUP_USER_SUCCESS',
        token: res.data.token
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        margin: 20
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
