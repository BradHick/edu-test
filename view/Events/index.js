import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import container from './container';
import { Container, Day, EventListItem, EventItem, Event } from './Component';
import Key from '../../assets/key.png';




class Events extends Component {

  state = {
    events: [
      {
          id: 1,
          title: "Event 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
          sendAt: "2019-04-07T13:56:06.429Z",
          image: "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
          startAt: "2019-06-21T19:40:13.066Z",
          location: "Fake Street, 1001 - Fortaleza CE"
      },
      {
          id: 2,
          title: "Event 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
          sendAt: "2019-03-16T21:19:15.891Z",
          image: "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
          startAt: "2019-04-18T14:28:58.818Z",
          location: "Fake Street, 1001 - Fortaleza CE"
      },
      {
          id: 3,
          title: "Event 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
          sendAt: "2019-08-04T18:26:59.712Z",
          image: "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
          startAt: "2019-08-18T08:27:51.196Z",
          location: "Fake Street, 1001 - Fortaleza CE"
      },
      {
          id: 4,
          title: "Event 4",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
          sendAt: "2019-07-15T14:36:33.189Z",
          image: "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
          startAt: "2019-11-21T11:33:38.684Z",
          location: "Fake Street, 1001 - Fortaleza CE"
      },
      {
          id: 5,
          title: "Event 5",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
          sendAt: "2019-11-09T06:03:30.218Z",
          image: "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
          startAt: "2019-11-14T18:49:36.753Z",
          location: "Fake Street, 1001 - Fortaleza CE"
      },
      {
          id: 6,
          title: "Event 6",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
          sendAt: "2019-04-16T01:05:58.583Z",
          image: "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
          startAt: "2019-11-16T00:58:08.566Z",
          location: "Fake Street, 1001 - Fortaleza CE"
      },
      {
          id: 7,
          title: "Event 7",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
          sendAt: "2019-03-23T08:04:02.547Z",
          image: "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
          startAt: "2019-11-13T03:07:22.861Z",
          location: "Fake Street, 1001 - Fortaleza CE"
      },
      {
          id: 8,
          title: "Event 8",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
          sendAt: "2019-07-04T21:23:59.625Z",
          image: "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
          startAt: "2019-10-02T12:16:42.846Z",
          location: "Fake Street, 1001 - Fortaleza CE"
      },
      {
          id: 9,
          title: "Event 9",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
          sendAt: "2019-08-03T14:16:28.959Z",
          image: "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
          startAt: "2019-08-06T13:11:59.627Z",
          location: "Fake Street, 1001 - Fortaleza CE"
      },
      {
          id: 10,
          title: "Event 10",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
          sendAt: "2019-03-14T03:57:59.239Z",
          image: "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
          startAt: "2019-08-21T09:48:09.845Z",
          location: "Fake Street, 1001 - Fortaleza CE"
      }
  ]
  }

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