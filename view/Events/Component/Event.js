import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventItem from './EventItem'
import Poster from '../../../assets/poster.jpeg'

const paragraph = `
	Lorem ipsum dolor sit amet, consectur adipiscing elit. Ut aliquam magna a arcu egestas porttitor. 
	Donec molestie porta velit, non mattis dui porttitor id. In ultrices a nunc.
`;

class Event extends Component {

  static navigationOptions = ({navigation}) =>({
    header: null
  });

  render = () => (
    <EventItem 
      poster={Poster}
      title="Exposição de telas no museu de fotografia"
      time="16:00"
      day="25"
      month="jan"
      text={paragraph}
    />
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