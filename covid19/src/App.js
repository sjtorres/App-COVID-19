import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'red'}}>
          Olá Mundo!
        </Text>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'red'}}>
          Olá Sandro Torres!
        </Text>
      </View>
    );
  }
}
