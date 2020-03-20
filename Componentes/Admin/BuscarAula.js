import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

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

    return (
        <View style={styles.container}>
             <FlatList
          data={list}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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