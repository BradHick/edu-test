import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import store from './store';
import { Provider } from 'react-redux';
import Router from './router';
import { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/lib/integration/react';

const persistor = getPersistor();

console.disableYellowBox=true;


export default class App extends Component {
  render() {
    return (
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <View style={styles.container}>
            <Router />
          </View>
        </Provider>
      </PersistGate>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
