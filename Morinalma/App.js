//import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import "@fontsource/poppins";
import {NativeRouter, Route} from "react-router-native";
import { Switch } from 'react-router-native';

//import {AppBar} from "./src/components/appBar";
//import ProfesorAdd from './src/modules/profesor/componentes/profesorAdd';
//import InicioSesion from './src/modules/profesor/componentes/InicioSesion';
import Curso from './src/modules/preceptor/componentes/Curso';
//import  Main  from './src/components/Main';

export default function App() {
  return (
      //averiguar porque no anda el main ni el appbar
    /*<NativeRouter>
      <Switch></Switch>
      <Route path='/' exact>
        <InicioSesion></InicioSesion>  
      </Route> 
      <Route path='/registrarse' exact>
        <Text>Probando</Text>
      </Route>       
    </NativeRouter>*/
    <Curso></Curso>
    //<InicioSesion></InicioSesion> 
    //<Main></Main> 

    
  );
}


