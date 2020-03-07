import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { CeuModules } from '../Data/CeuModules';

const CeuMenu = props =>{
    return (
        <View style={style.screen}>
            <View style={style.evaluacion}> 
                <Text>Test</Text>
            </View>
            <View style={style.asistencia}>

            </View>
            <View style={style.reportes}> 

            </View>
            <View>
                
            </View>
        </View>
    )
}

CeuMenu.navigationOptions = {
    headerTitle: 'Menu'
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection : 'column',
        backgroundColor: 'white'
    },
    evaluacion:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    asistencia: {
        flex: 1,
        margin: 15,
        height: 150
    },
    reportes: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CeuMenu;