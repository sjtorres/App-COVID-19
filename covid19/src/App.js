import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './components/Home';
import What from './components/What';
import Sintomas from './components/Sintomas';
import Transmissao from './components/Transmissao';
import Prevencao from './components/Prevencao';
import Mapa from './components/Mapa';

const myNavGroup = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  What: {
    screen: What,
    navigationOptions: {
      title: 'CoronaVírus',
    },
  },
  Sintomas: {
    screen: Sintomas,
  },
  Transmissao: {
    screen: Transmissao,
    navigationOptions: {
      title: 'Como é Transmitido',
    },
  },
  Prevencao: {
    screen: Prevencao,
    navigationOptions: {
      title: 'Como se Previnir',
    },
  },
  Mapa: {
    screen: Mapa,
    navigationOptions: {
      title: 'Mapa da Evolução do Vírus',
    },
  },
});

export default createAppContainer(myNavGroup);
