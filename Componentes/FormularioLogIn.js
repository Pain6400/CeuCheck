import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native'; 
import { round } from 'react-native-reanimated';

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    password: t.String,
});
  
const LogFormulario = props => {
    return (
    <View style={style.container} >
        <Form type={User} />
        <Button title="Iniciar sesion" color='#9e030d' />
    </View>)
};

const style = StyleSheet.create({
    container:{
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffffff'
    }
    
});

export default LogFormulario;