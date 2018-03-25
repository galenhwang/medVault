import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

class FormScreen extends React.Component {
  state = {
    text: ''
  };

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={{width: '60%'}}
          label='Email'
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />

        <TextInput
          style={{width: '60%'}}
          label='Email'
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />

        <TextInput
          style={{width: '60%'}}
          label='Email'
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />

        <TextInput
          style={{width: '60%'}}
          label='Email'
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />

        <TextInput
          style={{width: '60%'}}
          label='Email'
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
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
})
export default FormScreen;
