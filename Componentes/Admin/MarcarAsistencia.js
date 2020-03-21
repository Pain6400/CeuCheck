import  React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements'

const MarcarAsistencia = props => {
    const [Asistencia, setAsistencia] = useState(false)    
    const { item } = props.navigation.state.params;
    
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
                    center
                    title='Marcar asistencia'
                    checkedColor='#D5422D'
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
                    title="  Guardar" color='#D5422D'
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
})

export default MarcarAsistencia;