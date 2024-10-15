import React, { useState } from "react";
import {StyleSheet} from 'react-native';

const MenuDesplegable = () => {
    return(
        <div style={Styles.HomeProfesor}>
            <div style={Styles.formulario}>
                <div style={Styles.casilleros}>
                    <div style={Styles.materia}>
                        <h3> 6°3 - Computacion Grafica</h3>
                    </div>
                    <div style={Styles.materia}>
                        <h3> 6°3 - Sistema Operativo</h3>
                    </div>
                    <div style={Styles.materia}>
                        <h3> 6°3 - Tecnologia de Redes</h3>
                    </div>
                    <div style={Styles.materia}>
                        <h3> 6°3 - Ingles Tecnico</h3>
                    </div>
                    <div style={Styles.materia}>
                        <h3> 6°3 - Organizacion y Arquitectura</h3>
                    </div>
                    <div style={Styles.materia}>
                        <h3> 6°3 - Programacion Web Dinamica</h3>
                    </div>
                    <button type="submit" style={Styles.CerrarSesion}>Cerrar Sesión</button>
                </div>
            </div>    
        </div>
    );
}
const Styles = StyleSheet.create({
    materia:{
       //fontFamily: 'Poppins',
       display:'flex',
       borderRadius: '20px',
       with: '174px',
       heigth: '26px',
       backgroundColor: '#f6edfa',
       color: '#000000',
       border: '2px solid #833D8E',
       //justifyContent:'center',
       alignItems:'center',
       margin:'20px',
       marginBottom: '10px',
    },
    CerrarSesion:{
        borderRadius: '20px',
        marginBottom: '25px',
        marginLeft: '145px',
        backgroundColor: '#833D8E',
        height: '56px',
        width: '334px',
        marginLeft: '10px',
        marginBottom: '40px',
    },
    formulario: {
        //border: '2px solid #833D8E',
        padding: '20px', /* Espacio interno dentro del borde */
        margin: '20px', /* Espacio exterior alrededor del formulario */
        borderRadius: 15,
        height: '446px',
        width: '397px',
    },
    HomeProfesor: {
        /*border: '2px solid #000000', /* Borde de 2 píxeles de grosor, color negro sólido */
        padding: '20px', /* Espacio interno dentro del borde */
        margin: '20px', /* Espacio exterior alrededor del formulario */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'450px', 
        borderRadius: 10,
        marginLeft: '400px',
    },
    casilleros:{
        marginLeft: '15px',
        marginTop: '-80px',
    },

});
export default MenuDesplegable;