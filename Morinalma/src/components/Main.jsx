import React from "react";
import { Text, View } from "react-native";
//import {AppBar} from "./appBar";
import {InicioSesion} from "./InicioSesion";

const Main = () => {
 //Aca voy a ir llamando a todos los archivos asi despues llamo a este a App.js
 return(
    <View>
        <InicioSesion></InicioSesion>; 
    </View>
 )
 
}

export default Main 