import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import container from './container';
import { Container, Day, EventListItem, EventItem, Event } from './Component';
import Key from '../../assets/key.png';




class Events extends Component {

  static navigationOptions = ({navigation}) =>({
    title: 'Eventos'
  });

  goToEvent = () => {
    this.props.navigation.navigate('Event');
  };

  render = () => (
    <Container>
      <View>
		    <Day>Quarta, 25 de janeiro</Day>
		    <EventListItem
		    	title="Aula especial de natação"
		    	time="14:00"
          date="Quarta, 25 de janeiro às 20:00h"
          onPress={this.goToEvent}
		    />
		    <EventListItem
		    	title="Exposição de Telas no museu ..."
		    	time="16:00"
          date="Quarta, 25 de janeiro às 20:00h"
          onPress={this.goToEvent}
		    	poster={Key}
		    />
	    </View>
    </Container>
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