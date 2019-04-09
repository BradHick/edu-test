import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import container from './container';




class Events extends Component {

  goToEvent = () => {
    this.props.navigation.navigate('Event');
  };

  render = () => (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Eventos</Text>
      <Button title='Vai para a tela de evento individual' onPress={this.goToEvent} />
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


export default container(Events);