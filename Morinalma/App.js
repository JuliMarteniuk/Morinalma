//import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import "@fontsource/poppins";
import {NativeRouter, Route} from "react-router-native";
import { Switch } from 'react-router-native'
import RootLayout from './app/_layout';


import {AppBar} from "./src/components/appBar";
import ProfesorAdd from './src/modules/profesor/componentes/profesorAdd';
import InicioSesion from './src/components/InicioSesion';
import Curso from './src/modules/preceptor/componentes/Curso';
import HomePreceptor from './src/modules/preceptor/componentes/HomePreceptor';
import  Main  from './src/components/Main';
import Asistencia from './src/modules/preceptor/componentes/asistencia';
import Filtros from './src/modules/administrador/componentes/Filtros';
import HomeProfesor from './src/modules/profesor/componentes/HomeProfesor';
import VistaCursoProfesor from './src/modules/profesor/componentes/VistaCursoProfesor';
import MenuDesplegable from './src/modules/profesor/componentes/MenuDesplegable';
import NuevaClase from './src/modules/profesor/componentes/NuevaClase';
import vistaCursoPreceptor from './src/modules/preceptor/componentes/VistaCursoPreceptor';
//import Editar from './src/modules/preceptor/componentes/editar';

//import {AppBar} from "./src/components/appBar";
//import ProfesorAdd from './src/modules/profesor/componentes/profesorAdd';
//import InicioSesion from './src/components/InicioSesion';
//import Curso from './src/modules/preceptor/componentes/Curso';
import HomePreceptor from './src/modules/preceptor/componentes/HomePreceptor';
//import  Main  from './src/components/Main';
//import Asistencia from './src/modules/preceptor/componentes/asistencia';
//import Filtros from './src/modules/administrador/componentes/Filtros';
//import HomeProfesor from './src/modules/profesor/componentes/HomeProfesor';
//import VistaCursoProfesor from './src/modules/profesor/componentes/VistaCursoProfesor';
//import MenuDesplegable from './src/modules/profesor/componentes/MenuDesplegable';
//import NuevaClase from './src/modules/profesor/componentes/NuevaClase';
//import vistaCursoPreceptor from './src/modules/preceptor/componentes/VistaCursoPreceptor';
//import Editar from './src/modules/preceptor/componentes/Editar';


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
    //<VistaCursoProfesor></VistaCursoProfesor>
    //<Filtros></Filtros>
    //<ProfesorAdd></ProfesorAdd>
    <HomeProfesor></HomeProfesor>
    //<RootLayout></RootLayout>
    //<MenuDesplegable></MenuDesplegable>
    //<NuevaClase></NuevaClase>

    //<VistaCursoPreceptor></VistaCursoPreceptor>
    //<Editar></Editar>


    //<vistaCursoPreceptor></vistaCursoPreceptor>
    //<Editar />
<<<<<<< HEAD
    //<RootLayout />
=======
    <RootLayout />

>>>>>>> d07135455d3430defb595c93e1e48d5f638841c4
    
  );
}


