import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { TextInput, Button } from 'react-native-paper';
import api from '../lib/api';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  }

  componentDidMount() {

  }

  _handleSubmit() {
    api.post('/users/login', {user: this.state}).then(res => {
      this.props.dispatch({type: 'LOGIN_USER_SUCCESS', token: res.data.token})
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center'
      }}>
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
        <Text>{this.props.token}</Text>
    </View>
    )
  }
}

export default connect(state => {
  return { token: state.token }
})(LoginScreen);
