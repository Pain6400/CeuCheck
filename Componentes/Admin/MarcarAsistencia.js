import  React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, Button, Icon } from 'react-native-elements'

const MarcarAsistencia = props => {
    const [Asistencia, setAsistencia] = useState(false)    
    const { item } = props.navigation.state.params;
    
    console.log(Asistencia);
    function ClickInCheck(){
        setAsistencia(false)
    }
    return (
        <View style={styles.container}>
            <View style={styles.informacion}>
                <View style={styles.viewInformacion}>
                    <View style={styles.info}>
                        <Text style={styles.texto}>Aula: {item.key}</Text>
                    </View>
                </View>
                <View style={styles.viewInformacion}>
                    <View style={styles.info}>
                        <Text style={styles.texto}>Maestro:</Text>
                    </View>
                </View>
                <View style={styles.viewInformacion}>
                    <View style={styles.info}>
                        <Text style={styles.texto}>Materia:</Text>
                    </View>
                </View>
                <View style={styles.viewInformacion}>
                    <View style={styles.info}>
                        <Text style={styles.texto}>Hora:</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewCkeck}>
                <CheckBox
                    title='Asistio?'
                    checked={Asistencia}
                    onPress={() => setAsistencia(!Asistencia)}
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
                    title="Guardar"
                />
            </View>
        </View>
    )
}

MarcarAsistencia.navigationOptions = {
    headerTitle: "Informacion del aula",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'column',
        backgroundColor: 'white'
    },
    informacion:{
        flex: 1,
    },
    viewCkeck:{
        flex: 1
    },
    viewInputs:{
        flex: 1
    },
    viewInformacion:{
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
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
})

export default MarcarAsistencia;