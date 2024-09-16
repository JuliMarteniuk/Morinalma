import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "@fontsource/poppins";
import ProfesorAdd from './src/modules/profesor/componentes/profesorAdd';
import InicioSesion from './src/modules/profesor/componentes/InicioSesion';
import Main from './Main';

export default function App() {
  return (
    <Main></Main>
    //<InicioSesion></InicioSesion>
    //<ProfesorAdd></ProfesorAdd>
  );
}


