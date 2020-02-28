import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const LogInSuperior = props => {
    return (
    <View style={style.container} >
        <Text style={style.font}>CeuCheck</Text>
    </View>)
};

const style = StyleSheet.create({
    container:{
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row'
    },
    font:{
        fontWeight: 'bold',
        fontSize: 60,
        color:'#a7a7a8'
    }
});

export default LogInSuperior;