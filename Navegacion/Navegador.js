import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import LogIn from '../Componentes/LogIn';

const Navegacion = createStackNavigator({
    LogInNavegacion: LogIn
});

export default createAppContainer(Navegacion);