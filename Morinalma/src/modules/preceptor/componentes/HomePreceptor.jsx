import React, { useState } from "react";
import {StyleSheet} from 'react-native';
//import "@fontsource/poppins";

const HomePreceptor = () => {
    return(
        <div style={Styles.HomePreceptor}>
            <div style={Styles.formulario}>
                <div style={Styles.casilleros}>
                    <div style={Styles.curso}>
                        <h3> 4°3 - Turno Vespertino</h3><br />
                        <h6> Ver información del curso</h6>
                    </div>
                    <div style={Styles.curso}>
                        <h3> 5°3 - Turno Vespertino</h3>
                        <h6> Ver información del curso</h6>
                    </div>
                    <div style={Styles.curso}>
                        <h3> 6°3 - Turno Vespertino</h3>
                        <h6> Ver información del curso</h6>
                    </div>
                </div>    
            </div>
        </div>
    
    );  
}

const Styles = StyleSheet.create({
    curso:{
        //fontFamily: 'Poppins',
        display:'flex',
        borderRadius: '20px',
        with: '374px',
        heigth: '96px',
        backgroundColor: '#f6edfa',
        color: '#000000',
        border: '2px solid #833D8E',
        //justifyContent:'center',
        alignItems:'center',
        margin:'20px',
    },
    formulario: {
        //border: '2px solid #833D8E',
        padding: '20px', /* Espacio interno dentro del borde */
        margin: '20px', /* Espacio exterior alrededor del formulario */
        borderRadius: 15,
        height: '446px',
        width: '397px',
    },
    HomePreceptor: {
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
        marginTop: '40px',
    },
});


export default HomePreceptor;
