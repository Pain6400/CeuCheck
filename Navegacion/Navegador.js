import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import LogIn from '../Componentes/LogIn';
import CeuMenu from '../Componentes/CeuMenu';
import Asistencia from '../Componentes/Admin/Asistencia';
import Evaluacion from '../Componentes/Admin/EvaluacionDocente';
import Reportes from '../Componentes/Admin/Reportes';
import BuscarAula from '../Componentes/Admin/BuscarAula';
import MarcarAsistencia from '../Componentes/Admin/MarcarAsistencia';
import BuscarDocente from '../Componentes/Admin/BuscarDocente';

const Navegacion = createStackNavigator({
    LogInNavegacion: LogIn,
    CeuMenuNavegation: CeuMenu,
    AsistenciaNavegacion: Asistencia,
    EvaluacionNavegacion: {
        screen: Evaluacion,
        navigationOptions: {
            title: 'Evaluacion al docente'
          }
    },
    ReportesNavegacion: Reportes,
    BuscarAulaNavegacion: Evaluacion,
    MarcarAsistenciaNavegacion: MarcarAsistencia,
    BuscarDocenteNavigation: BuscarDocente
});

export default createAppContainer(Navegacion);