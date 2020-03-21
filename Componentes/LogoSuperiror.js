import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

const LogInSuperior = props => {
    return (
    <View style={style.container} >
        <ResponsiveImage  source={require('../Imagenes/ceucheck.png')} initWidth="300" initHeight="300"/>
    </View>)
};

const style = StyleSheet.create({
    container:{
        marginTop:10,
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row'
    }
});

export default LogInSuperior;