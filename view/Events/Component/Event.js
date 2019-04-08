import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Event extends Component {

  render = () => (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Evento Individual</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  text: {
    fontSize: 60,
  }
});


export default Event;