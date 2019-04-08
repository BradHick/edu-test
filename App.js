import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import store from './store';
import { Provider } from 'react-redux';
import Router from './router';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
