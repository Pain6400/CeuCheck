import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const lista = [{ key: 'Josue' },
{ key: 'kevin' },
{ key: 'Carmen' },
{ key: 'Jackson' },
{ key: 'James' },
{ key: 'Joel' },
{ key: 'John' },
{ key: 'Jillian' },
{ key: 'Jimmy' },
{ key: 'Julie' }]

const BuscarDocente = props => {
    const [list, CargarListApi] = useState(lista);
    const { navigation } = props;
    useEffect(() => {
        fetch('http://192.168.1.7:8000/asistencia/Aulas')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            let nuevaLista = [];
            data.map(item => {
                nuevaLista.push({key: item.idaula})
            })
          //CargarListApi(nuevaLista)
        })
        .catch(console.log)
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                keyExtractor={(item, index) => index.toString()}
                renderItem={item => <ListaDeAulasRender item ={item} navigation={ navigation } />}
            />
        </View>
    );
}

function ListaDeAulasRender(props){
    const { item } = props.item;
    const { navigation } = props;
    
    return(
        <TouchableOpacity onPress={() => navigation.navigate('MarcarAsistenciaNavegacion', {item})}>
            <View style={styles.viewAula}>
                <View style={styles.Aulas}>
                    <Text style={styles.item}>{item.key}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

BuscarDocente.navigationOptions = {
    headerTitle: "Aulas",
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     backgroundColor:'white'
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      fontWeight: 'bold'
    },
    viewAula:{
        padding:10,
        flexDirection: 'row',
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: '#D5422D',
        color: 'white'
    },
    Aulas:{
        marginRight: 15
    },
  })

export default BuscarDocente;