
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class HomeScreen extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>
          Your Medical Information:
        </Text>
        <Text style={styles.fields}>
          Name: Jane Doe
        </Text>
        <Text style={styles.fields}>
          Age: 28
        </Text>
        <Text style={styles.fields}>
          Allergies: Dairy, Egg, Peanut
        </Text>
        <Text style={styles.fields}>
          Prescriptions: Lisinopril, Simvastatin
        </Text>
        <Text style={styles.fields}>
          History: Asthma, Heart disease
        </Text>
        <Text style={styles.fields}>
          Medical Record Number: 2940915
        </Text>
        <Text style={styles.fields}>
          Height (inches): 63
        </Text>
        <Text style={styles.fields}>
          Weight: 110
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlignVertical: 'top',
  },
  fields: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
});
