import React from 'react';
import {StyleSheet, Text, View, Slider} from 'react-native';

export default class Evaluacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: 0,
      question2: 0,
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

  render() {
    const {question1, question2} = this.state;
    return (
      <View style={styles.screen}>
        <Text></Text>
          <Text>El profesor asiste puntualmente a sus clases?</Text>
        <Slider
          step={1}
          maximumValue={5}
          onValueChange={this.changeQuestion1.bind(this)}
          value={question1}
        />
        <Text style={styles.text}>{String(question1)}</Text>

        <Text>El profesor presenta los objetivos al inicio de la clase?</Text>
        <Slider
          step={1}
          maximumValue={5}
          onValueChange={this.changeQuestion2.bind(this)}
          value={question2}
        />
        <Text style={styles.text}>{String(question2)}</Text>
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
    fontSize: 30,
    textAlign: 'center',
  },
});