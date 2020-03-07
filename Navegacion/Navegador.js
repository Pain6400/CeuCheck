import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import LogIn from '../Componentes/LogIn';
import CeuMenu from '../Componentes/CeuMenu';
import Asistencia from '../Componentes/Admin/Asistencia';

const Navegacion = createStackNavigator({
    LogInNavegacion: LogIn,
    CeuMenuNavegation: CeuMenu,
    AsistenciaNavegacion: Asistencia
});

export default createAppContainer(Navegacion);