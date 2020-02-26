import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native'; 

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    password: t.String,
});
  
const LogFormulario = props => {
    return (
    <View style={style.container} >
        <Form type={User} />
        <Button title="Log In" />
    </View>)
};

const style = StyleSheet.create({
    container:{
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
});

export default LogFormulario;