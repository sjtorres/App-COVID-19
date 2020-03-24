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
  },
  What: {
    screen: What,
  },
  Sintomas: {
    screen: Sintomas,
  },
  Transmissao: {
    screen: Transmissao,
  },
  Prevencao: {
    screen: Prevencao,
  },
  Mapa: {
    screen: Mapa,
  },
});

export default createAppContainer(myNavGroup);
