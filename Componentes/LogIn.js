import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LogInInferior from './LogoInferior';
import LogFormulario from './FormularioLogIn';
import LogInSuperior from './LogoSuperiror';

const LogIn = props => {
    return (
    <View style={style.screen}>
        <View style={style.header}>
            <LogInSuperior />
        </View>
        <View style={style.container}>
            <LogFormulario />
        </View>
        <View style={[style.fooder]}>
            <LogInInferior />
        </View>
    </View>)
};

LogIn.navigationOptions = {
    headerShown: false,
};

const style = StyleSheet.create({
    screen:{
        flex: 1,
        flexDirection : 'column',
        backgroundColor: 'white'
    },
    header:{
        flex: 1,
    },
    container:{
        flex: 1,
    },
    fooder:{
        flex: 1,
    }
});

export default LogIn;