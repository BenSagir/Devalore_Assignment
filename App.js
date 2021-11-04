/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {

  StyleSheet,

  View,
} from 'react-native';


import Header from './App/Header';
import Footer from './App/Footer';
import Form from './App/Form';
const App: () => Node = () => {

  return (
    <View style={{backgroundColor: 'rgb(215,215,220)', flex: 1}}>
      <Header data={{header: 'Header'}} />
      <Form />
      <Footer data={{footer: 'Footer'}} />
    </View >
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
