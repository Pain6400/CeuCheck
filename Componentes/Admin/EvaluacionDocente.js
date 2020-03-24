import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Slider } from 'react-native-elements'

export default class Evaluacion extends React.Component {
  constructor(props) {
    const  { key } = props.navigation.state.params.item;
    console.log(key);
    super(props);
    this.state = {
      question1: 0,
      question2: 0,
      question3: 0,
      question4: 0,
      question5: 0,
      question6: 0,
      question7: 0,
      question8: 0,
      question9: 0,
      question10: 0,
      question11: 0,
      question12: 0,
    };
  }

  changeQuestion1(value) {
    this.setState(() => {
      return {
        question1: parseFloat(value),
      };
    });
  }

  changeQuestion2(value) {
    this.setState(() => {
      return {
        question2: parseFloat(value),
      };
    });
  }

  changeQuestion3(value) {
    this.setState(() => {
      return {
        question3: parseFloat(value),
      };
    });
  }

  // changeQuestion4(value) {
  //   this.setState(() => {
  //     return {
  //       question4: parseFloat(value),
  //     };
  //   });
  // }

  // changeQuestion5(value) {
  //   this.setState(() => {
  //     return {
  //       question5: parseFloat(value),
  //     };
  //   });
  // }

  // changeQuestion6(value) {
  //   this.setState(() => {
  //     return {
  //       question6: parseFloat(value),
  //     };
  //   });
  // }

  // changeQuestion7(value) {
  //   this.setState(() => {
  //     return {
  //       question7: parseFloat(value),
  //     };
  //   });
  // }

  // changeQuestion8(value) {
  //   this.setState(() => {
  //     return {
  //       question8: parseFloat(value),
  //     };
  //   });
  // }

  // changeQuestion9(value) {
  //   this.setState(() => {
  //     return {
  //       question9: parseFloat(value),
  //     };
  //   });
  // }

  // changeQuestion10(value) {
  //   this.setState(() => {
  //     return {
  //       question10: parseFloat(value),
  //     };
  //   });
  // }

  // changeQuestion11(value) {
  //   this.setState(() => {
  //     return {
  //       question11: parseFloat(value),
  //     };
  //   });
  // }

  // changeQuestion12(value) {
  //   this.setState(() => {
  //     return {
  //       question12: parseFloat(value),
  //     };
  //   });
  // }

  render() {
    const {question1, question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12} = this.state;
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>El profesor asiste puntualmente a sus clases?</Text>
          <Slider style={styles.Slider}
            step={1}
            maximumValue={5}
            onValueChange={this.changeQuestion1.bind(this)}
            value={question1}
            thumbTintColor='#D5422D'
          />
        <Text style={styles.valor_slider}>{String(question1)}</Text>

        <Text style={styles.text}>El profesor presenta los objetivos al inicio de la clase?</Text>
          <Slider style={styles.Slider}
            step={1}
            maximumValue={5}
            onValueChange={this.changeQuestion2.bind(this)}
            value={question2}
            thumbTintColor='#D5422D'
          />
        <Text style={styles.valor_slider}>{String(question2)}</Text>

        <Text style={styles.text}>El profesor hace un repaso de los temas anteriores?</Text>
          <Slider style={styles.Slider}
            step={1}
            maximumValue={5}
            onValueChange={this.changeQuestion3.bind(this)}
            value={question3}
            thumbTintColor='#D5422D'
          />
        <Text style={styles.valor_slider}>{String(question3)}</Text>

        {/* <Text style={styles.text}>El profesor imparte la clase de forma clara y ordenada?</Text>
          <Slider style={styles.Slider}
            step={1}
            maximumValue={5}
            onValueChange={this.changeQuestion4.bind(this)}
            value={question4}
          />
        <Text style={styles.valor_slider}>{String(question4)}</Text>

        <Text style={styles.text}>El profesor se apoya en el uso de tecnologías o diferentes medios para enriquecer la clase</Text>
          <Slider style={styles.Slider}
            step={1}
            maximumValue={5}
            onValueChange={this.changeQuestion5.bind(this)}
            value={question5}
          />
        <Text style={styles.valor_slider}>{String(question5)}</Text>

        <Text style={styles.text}>El profesor hace buen uso de su tiempo en la clase?</Text>
          <Slider style={styles.Slider}
            step={1}
            maximumValue={5}
            onValueChange={this.changeQuestion6.bind(this)}
            value={question6}
          />
        <Text style={styles.valor_slider}>{String(question6)}</Text>

        <Text style={styles.text}>Cuando el profesor explica, ¿Usted comprende el tema?</Text>
          <Slider style={styles.Slider}
            step={1}
            maximumValue={5}
            onValueChange={this.changeQuestion7.bind(this)}
            value={question7}
          />
        <Text style={styles.valor_slider}>{String(question7)}</Text>

        <Text style={styles.text}>El profesor le motiva a participar?</Text>
          <Slider style={styles.Slider}
            step={1}
            maximumValue={5}
            onValueChange={this.changeQuestion8.bind(this)}
            value={question8}
          />
        <Text style={styles.valor_slider}>{String(question8)}</Text>

        <Text style={styles.text}>El profesor trata a los estudiantes de forma respetuosa?</Text>
          <Slider style={styles.Slider}
            step={1}
            maximumValue={5}
            onValueChange={this.changeQuestion9.bind(this)}
            value={question9}
          />
        <Text style={styles.valor_slider}>{String(question9)}</Text>

        <Text style={styles.text}>El profesor aclara las dudas cuando las hay?</Text>
          <Slider style={styles.Slider}
            step={1}
            maximumValue={5}
            onValueChange={this.changeQuestion10.bind(this)}
            value={question10}
          />
        <Text style={styles.valor_slider}>{String(question10)}</Text>

        <Text style={styles.text}>El profesor brinda revisión de los acumulativos y exámenes en el tiempo establecido?</Text>
          <Slider style={styles.Slider}
            step={1}
            maximumValue={5}
            onValueChange={this.changeQuestion11.bind(this)}
            value={question11}
          />
        <Text style={styles.valor_slider}>{String(question11)}</Text>

        <Text style={styles.text}>El profesor cierra su clase brindando ideas claves y conclusiones del tema expuesto?</Text>
          <Slider style={styles.Slider}
            step={1}
            maximumValue={5}
            onValueChange={this.changeQuestion12.bind(this)}
            value={question12}
          />
        <Text style={styles.valor_slider}>{String(question12)}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection : 'column',
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    padding:10,
    marginLeft:10,
    marginRight:10
  },
  valor_slider:{
    fontSize:30,
    textAlign:'center',
    paddingBottom:30
  },
  Slider:{
    padding:20,
    marginLeft:30,
    marginRight:30,
  }
});