import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import container from './container';


const goToEvent = () => {
  this.props.navigation.navigate('Event');
};

class Events extends Component {

  render = () => (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Eventos</Text>
      <Button title='Vai para a tela de evento individual' onPress={goToEvent} />
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