import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableWithoutFeedback } from 'react-native';

const lista = [{ key: 'test' },
{ key: 'test2' },
{ key: 'Dominic' },
{ key: 'Jackson' },
{ key: 'James' },
{ key: 'Joel' },
{ key: 'John' },
{ key: 'Jillian' },
{ key: 'Jimmy' },
{ key: 'Julie' }]



const BuscarAula = props => {
    const [list, CargarListApi] = useState(lista)
    const cargarLista = () => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            let nuevaLista = [];
            data.map(item => {
                nuevaLista.push({key: item.name})
            })
          CargarListApi(nuevaLista)
        })
        .catch(console.log)
    }

    actionOnRow = (item) => {
      console.log('Selected Item :',item);
   }

    return (
        <View style={styles.container}>
             <FlatList
          data={list}
          renderItem={({item}) => 
          (
            <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                <View>
                  <Text>ID: {item.key}</Text>
                </View>
            </TouchableWithoutFeedback>
          )}
        />
        <Button title="CargarLista" onPress={cargarLista} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
export default BuscarAula;