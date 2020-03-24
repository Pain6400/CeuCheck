import  React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements'

function ObtenerDatos(item, setObjeto, navigation){
    fetch('http://192.168.1.7:8000/asistencia/GetClasesPorAula/' + item.key)
    .then(res => res.json())
    .then((data) => {
        if(data.Status == 404){
            Alert.alert(
                'No se puede marcar asistencia',
                'No se estan impartiendo clases',
                [
                    { text: 'OK', onPress: () => navigation.goBack() },
                ]
            ); 
        }else{
            setObjeto(data);
        }
    })
    .catch(console.log)
}
const MarcarAsistencia = props => {
    const [Asistencia, setAsistencia] = useState(false);
    const [observacion, setObservacion] = useState('Ninguna');
    const { item } = props.navigation.state.params;
    const { navigation } = props;
    const [objeto, setObjeto] = useState({});

//ObtenerPorAula------------------------------------------------
useState(() => ObtenerDatos(item, setObjeto, navigation))

//-------------------------------------------------------------------------
    return (
        <View style={styles.container}>
            <View style={styles.informacion}>
                <View style={styles.viewInformacion}>
                    <View style={styles.info}>
                        <Text style={styles.texto}>Aula: {objeto.aulaid}</Text>
                    </View>
                </View>
                <View style={styles.viewInformacion}>
                    <View style={styles.info}>
                        <Text style={styles.texto}>Docente: {objeto.docente}</Text>
                    </View>
                </View>
                <View style={styles.viewInformacion}>
                    <View style={styles.info}>
                        <Text style={styles.texto}>Materia: {objeto.nombremateria}</Text>
                    </View>
                </View>
                <View style={styles.viewInformacion}>
                    <View style={styles.info}>
                        <Text style={styles.texto}>Hora: de {objeto.horainicio} hasta {objeto.horafinal}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewCkeck}>
                <CheckBox
                    center
                    title='Marcar asistencia'
                    checkedColor='#D5422D'
                    checked={Asistencia}
                    onPress={() => setAsistencia(!Asistencia)}
                />
            </View>
            <View style={styles.viewObservacion}>
                <TextInput
                    placeholder='Observacion'
                    style={styles.inputs}
                    onChangeText={(val) => setObservacion(val)}
                />
            </View>
            <View style={styles.viewInputs}>
                <Button
                    icon={
                        <Icon
                            name="save"
                            size={20}
                            color="white"
                        />
                    } 
                    title="  Guardar" 
                    color='#D5422D'
                    onPress = {() => GuardarAsistencia(navigation, objeto.aulaid, Asistencia, observacion, item)}
                />
            </View>
        </View>
    )
}

function GuardarAsistencia(navigation, seccionid, Asistencia, observacion, item){
    const fecha = formatDate().toString()
console.log('seccionid=', item.seccion, ' Asistencia=', Asistencia, ' observacion=', observacion, ' fecha:', fecha)
    fetch("http://192.168.1.7:8000/asistencia/RegistrarAsistencia", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            seccionid: 102,
            asistio: Asistencia,
            observacion: observacion,
            fecha: fecha
        })
    })
    .then((response) => response.json())
    .then((responseData) => {
        console.response(response)
        console.log(
            "POST Response",
            "Response Body -> " + JSON.stringify(responseData)
        )
        // if(responseData.status == 200){
        //     Alert.alert(  
        //         'Guardar asistencia',  
        //         'La asistencia se ha guardado exitosamente',  
        //         [   
        //             {text: 'OK', onPress: () => navigation.goBack()},  
        //         ]  
        //     ); 
        // }
    })
    .catch((error) => {
        Alert.alert(
            'Guardar asistencia',
            'La asistencia se ha guardado exitosamente',
            [
                { text: 'OK', onPress: () => navigation.goBack() },
            ]
        ); 
    });
}

function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

MarcarAsistencia.navigationOptions = {
    headerTitle: "Asistencia de catedratico",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'column',
        backgroundColor: 'white'
    },
    informacion:{
        
    },
    viewCkeck:{
        padding: 10,
        margin:10,
        borderWidth:0
    },
    viewInputs:{
        flex: 1,
        margin: 30
    },
    viewInformacion:{
        flexDirection: 'row',
        margin: 20,
        marginLeft: 30,
        marginRight: 30,
        borderBottomWidth: 1,
        borderColor: '#D5422D',
    },
    info:{
        marginRight: 15
    },
    texto: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontWeight: 'bold'
      },
      viewObservacion:{
          flex: 1,
          borderBottomWidth: 1,
          borderColor: '#D5422D',
          margin: 20,
          marginLeft: 30,
          marginRight: 30,
      },
      inputs: {
          marginLeft: 135
    },
})

export default MarcarAsistencia;