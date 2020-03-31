import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagecorona}
          source={require('../assets/covid-19.png')}
        />

        <Text style={styles.textoCorona}>CORONAVÍRUS</Text>
        <Text style={styles.textoCovid}>COVID-19</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            this.props.navigation.navigate('What');
          }}>
          <Text style={styles.textoButton}>O que é o novo Coronavírus</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            this.props.navigation.navigate('Sintomas');
          }}>
          <Text style={styles.textoButton}>
            Quais os sintomas do Coronavírus
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            this.props.navigation.navigate('Transmissao');
          }}>
          <Text style={styles.textoButton}>
            Como é transmitido o Coronavírus
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            this.props.navigation.navigate('Prevencao');
          }}>
          <Text style={styles.textoButton}>
            Como se previnir do Coronavírus
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            this.props.navigation.navigate('Mapa');
          }}>
          <Text style={styles.textoButton}>Mapa da evolução do Vírus</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2020',
  },
  botao: {
    width: 350,
    marginTop: 15,
    height: 48,
    backgroundColor: '#ddd',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagecorona: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  textoButton: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textoCovid: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 32,
  },
  textoCorona: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
  },
});
