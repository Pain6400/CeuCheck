import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const BuscarAula = props => {
    return (
        <View style={styles.container}>
             <FlatList
          data={[
            {key: 'test'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
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