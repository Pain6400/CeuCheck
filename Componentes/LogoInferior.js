import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

const LogInInferior = props => {
    return (
    <View style={style.container} >
        <ResponsiveImage  source={require('../Imagenes/LogoInferior.jpg')} initWidth="430" initHeight="130"/>
    </View>)
};

const style = StyleSheet.create({
    container:{
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row'
    },
});

export default LogInInferior;