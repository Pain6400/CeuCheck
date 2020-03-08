import React from 'react';
import {StyleSheet, Text, View, Slider} from 'react-native';

export default class Evaluacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  render() {
    const {value} = this.state;
    return (
      <View>
          <Text>El docente asiste puntualmente a clases?</Text>
        <Slider
          step={1}
          maximumValue={5}
          onValueChange={this.change.bind(this)}
          value={value}
        />
        <Text style={styles.text}>{String(value)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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