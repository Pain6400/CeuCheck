import React from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { CeuModules } from '../Data/CeuModules';
import { color } from 'react-native-reanimated';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

const CeuMenu = props =>{
    return (
        <View style={style.screen}>
            <View style={style.evaluacion}> 
                <Text 
                    style={style.title} 
                    numberOfLines={0}
                    onPress = {() => {
                        props.navigation.navigate({
                            routeName: 'BuscarAulaNavegacion'
                        })
                    }}
                >Evaluacion al docente</Text>
            </View>
            
            <View style={style.evaluacion}>
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
            
            <View style={style.evaluacion}> 
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
            <View style={style.footer}>
                
            </View>
        </View>
    )
}

CeuMenu.navigationOptions = {
    headerTitle: 'Menu'
    //alignItems:'center'
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection : 'column',
        backgroundColor: 'white'
    },
    evaluacion:{
        flex: 0.2,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#D5422D',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:25,
        marginRight:25,
        marginTop:50,
        backgroundColor:'#D5422D'
    },
    footer:{
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#ffffff'
    }
});

export default CeuMenu;