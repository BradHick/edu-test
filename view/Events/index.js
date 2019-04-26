import React, { Component } from 'react';
import moment from 'moment';
import brLocale from 'moment/locale/pt-br';
import { View, Button, Text, StyleSheet, ActivityIndicator, SectionList } from 'react-native';
import container from './container';
import { groupBy, mapValues } from '../../helpers';
import { Container, Day, EventListItem, Button as CustomButton } from './Component';

moment.locale('pt-br', brLocale);

class Events extends Component {

  static navigationOptions = ({navigation}) =>({
    title: 'Eventos'
  });

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Eventos',
      headerRight: (
        <Button
          onPress={navigation.getParam('logout')}
          title="Sair"
          color='#733DBE'
          style={{ marginRight: 30, paddingRight: 20 }}
        />
      ),
    };
  };

  logout = () => {
    this.props.logout();
    this.props.navigation.navigate('Login');
  }

  goToEvent = (event) => {
    this.props.navigation.navigate('Event', { event });
  };

  renderEvent = (event) => (
    <View>
      <EventListItem
        title={event.title} 
        date={moment(event.startAt).format('LLLL')}
        time={moment(event.startAt).format('HH:mm')}
        poster={event.image}
        onPress={() => this.goToEvent(event)}
      />
    </View>
  );

  componentDidMount(){
    const { fetchEvents, token, navigation } = this.props;
    navigation.setParams({ logout: this.logout });
    if (token == ''){
      navigation.navigate('Login');
    }else{
      fetchEvents();
    }
  }

  

  groupEvents = (events) => {
    const groupedEvents = groupBy(events, (event) => moment(event.startAt).format('dddd, DD MMMM'));
    const groupEventsTemp = mapValues(groupedEvents, (value, key) => {
      return {
        title: key,
        data: value
      }
     });
     return Object.values(groupEventsTemp);
  }
  

  render = () => {
    const { events, loading, hasMoreEvents, fetchEvents } = this.props;
    return (
      <View style={{flex:1}}>
      <Container>
        <SectionList
          renderSectionHeader={({ section: { title } }) => (
            <Day>{title}</Day>
          )}
          sections={this.groupEvents(events)}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => this.renderEvent(item)}
          ListEmptyComponent={!loading && <Text style={styles.text}>No Events</Text>}
          ListFooterComponent={loading && <ActivityIndicator size='large' color='#733DBE'/>}
        />
        {!loading &&
          hasMoreEvents &&
          <CustomButton onPress={() => fetchEvents() }>
            <Text style={styles.textButton}>{'Carregar mais'}</Text>
          </CustomButton>
        }

      </Container>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  text: {
    fontSize: 60,
  },
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  }
});


export default container(Events);