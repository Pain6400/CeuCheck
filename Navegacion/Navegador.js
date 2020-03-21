import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import LogIn from '../Componentes/LogIn';
import CeuMenu from '../Componentes/CeuMenu';
import Asistencia from '../Componentes/Admin/Asistencia';
import Evaluacion from '../Componentes/Admin/EvaluacionDocente';
import Reportes from '../Componentes/Admin/Reportes';
import BuscarAula from '../Componentes/Admin/BuscarAula';
import MarcarAsistencia from '../Componentes/Admin/MarcarAsistencia';

const Navegacion = createStackNavigator({
    LogInNavegacion: LogIn,
    CeuMenuNavegation: CeuMenu,
    AsistenciaNavegacion: Asistencia,
    EvaluacionNavegacion: Evaluacion,
    ReportesNavegacion: Reportes,
    BuscarAulaNavegacion: Evaluacion,
    MarcarAsistenciaNavegacion: MarcarAsistencia
});

export default createAppContainer(Navegacion);