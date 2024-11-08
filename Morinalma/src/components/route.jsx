import {AppBar} from "./src/components/appBar";
import ProfesorAdd from './src/modules/profesor/componentes/profesorAdd';
import InicioSesion from './src/components/InicioSesion';
import Curso from './src/modules/preceptor/componentes/Curso';
import HomePreceptor from './src/modules/preceptor/componentes/HomePreceptor';
import  Main  from './src/components/Main';
import Asistencia from './src/modules/preceptor/componentes/asistencia';
import Filtros from './src/modules/administrador/componentes/Filtros';
import HomeProfesor from './src/modules/profesor/componentes/HomeProfesor';
import router from './src/modules/profesor/componentes/router';
import MenuDesplegable from './src/modules/profesor/componentes/MenuDesplegable';
import NuevaClase from './src/modules/profesor/componentes/NuevaClase';
import vistaCursoPreceptor from './src/modules/preceptor/componentes/VistaCursoPreceptor';
import Editar from './src/modules/preceptor/componentes/editar';
import { View } from "react-native";

const router = () => {
    return(
    <NativeRouter>
      <Switch></Switch>
      <Route path='/' exact>  
        <Asistencia></Asistencia>
        <Curso></Curso>
        <InicioSesion></InicioSesion> 
        <Main></Main> 
        <HomePreceptor></HomePreceptor>
        <VistaCursoProfesor></VistaCursoProfesor>
        <Filtros></Filtros>
        <ProfesorAdd></ProfesorAdd>
        <HomeProfesor></HomeProfesor>
        <RootLayout></RootLayout>
        <MenuDesplegable></MenuDesplegable>
        <NuevaClase></NuevaClase>
        <VistaCursoPreceptor></VistaCursoPreceptor>
        <Editar></Editar>
      </Route> 
      <Route path='/registrarse' exact>
        <Text>Probando</Text>
      </Route>       
    </NativeRouter>
    );  
}

const styles = StyleSheet.create({
});


export default router;