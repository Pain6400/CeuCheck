import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import Navegacion from './Navegacion/Navegador';

export default function App() {

  return <Navegacion />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
