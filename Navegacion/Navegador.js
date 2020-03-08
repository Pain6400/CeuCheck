import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import LogIn from '../Componentes/LogIn';
import CeuMenu from '../Componentes/CeuMenu';
import Asistencia from '../Componentes/Admin/Asistencia';
import Evaluacion from '../Componentes/Admin/EvaluacionDocente';
import Reportes from '../Componentes/Admin/Reportes';

const Navegacion = createStackNavigator({
    LogInNavegacion: LogIn,
    CeuMenuNavegation: CeuMenu,
    AsistenciaNavegacion: Asistencia,
    EvaluacionNavegacion: Evaluacion,
    ReportesNavegacion: Reportes
});

export default createAppContainer(Navegacion);