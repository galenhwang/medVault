import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

class FormScreen extends React.Component {
  state = {
    age: '',
    allergies: '',
    prescription: '',
    history: '',
    number: '',
    height: '',
    weight: '',
  };

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={{width: '60%'}}
          label='Age'
          value={this.state.age}
          onChangeText={text => this.setState({ text })}
        />

        <TextInput
          style={{width: '60%'}}
          label='Allergies'
          value={this.state.allergies}
          onChangeText={text => this.setState({ text })}
        />

        <TextInput
          style={{width: '60%'}}
          label='Prescription'
          value={this.state.prescription}
          onChangeText={text => this.setState({ text })}
        />

        <TextInput
          style={{width: '60%'}}
          label='History'
          value={this.state.history}
          onChangeText={text => this.setState({ text })}
        />

        <TextInput
          style={{width: '60%'}}
          label='Medical Record Number'
          value={this.state.number}
          onChangeText={text => this.setState({ text })}
        />

        <TextInput
          style={{width: '60%'}}
          label='Height'
          value={this.state.height}
          onChangeText={text => this.setState({ text })}
        />
        <TextInput
          style={{width: '60%'}}
          label='Weight'
          value={this.state.weight}
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
