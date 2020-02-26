import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const LogInSuperior = props => {
    return (
    <View style={style.container} >
        <Text>Ceu Check</Text>
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

export default LogInSuperior;