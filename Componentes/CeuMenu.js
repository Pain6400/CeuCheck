import React from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { CeuModules } from '../Data/CeuModules';

const CeuMenu = props =>{
    return (
        <View style={style.screen}>
            <View style={style.evaluacion}> 
                <Text 
                    style={style.title} 
                    numberOfLines={2}
                    onPress = {() => {
                        props.navigation.navigate({
                            routeName: 'EvaluacionNavegacion'
                        })
                    }}
                >Evaluacion al docente</Text>
            </View>
            <Text></Text>
            <View style={style.asistencia}>
                <Text 
                    style={style.title} 
                    numberOfLines={2}
                    onPress = {() => {
                        props.navigation.navigate({
                            routeName: 'AsistenciaNavegacion'
                        })
                    }}
                    >Asistencia del docente</Text>
            </View>
            <Text></Text>
            <View style={style.reportes}> 
                <Text 
                    style={style.title} 
                    numberOfLines={2}
                    onPress = {() => {
                        props.navigation.navigate({
                            routeName: 'ReportesNavegacion'
                        })
                    }}
                    >Reportes</Text>
            </View>
            <View style={style.fooder}>
                
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
        flex: 0.5,
        borderRadius: 400,
        borderWidth: 5,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    asistencia: {
        flex: 0.5,
        borderRadius: 400,
        borderWidth: 5,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    reportes: {
        flex: 0.5,
        borderRadius: 400,
        borderWidth: 5,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fooder:{
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'right'
    }
});

export default CeuMenu;