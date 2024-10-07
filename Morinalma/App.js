//import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import "@fontsource/poppins";
import {NativeRouter, Route} from "react-router-native";
import { Switch } from 'react-router-native';

//import {AppBar} from "./src/components/appBar";
//import ProfesorAdd from './src/modules/profesor/componentes/profesorAdd';
//import InicioSesion from './src/modules/profesor/componentes/InicioSesion';
//import Curso from './src/modules/preceptor/componentes/Curso';
//import HomePreceptor from './src/modules/preceptor/componentes/HomePreceptor';
//import  Main  from './src/components/Main';
//import Asistencia from './src/modules/preceptor/componentes/Asistencia';
import VistaCursoProfesor from './src/modules/profesor/componentes/VistaCursoProfesor';

export default function App() {
  return (
    /*<NativeRouter>
      <Switch></Switch>
      <Route path='/' exact>
        <InicioSesion></InicioSesion>  
      </Route> 
      <Route path='/registrarse' exact>
        <Text>Probando</Text>
      </Route>       
    </NativeRouter>*/


    //<Asistencia></Asistencia>
    //<Curso></Curso>
    //<InicioSesion></InicioSesion> 
    //<Main></Main> 
    //<HomePreceptor></HomePreceptor>
    <VistaCursoProfesor></VistaCursoProfesor>

    
  );
}


