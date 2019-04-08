import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import container from './container';


const goToEvents = () => {
  this.props.navigation.navigate('Events');
};

class Login extends Component {

  render = () => (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Login</Text>
      <Button title='Vai para lista de eventos' onPress={goToEvents} />
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


export default container(Login);