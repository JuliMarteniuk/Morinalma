import React, { useState } from "react";
import {StyleSheet} from 'react-native';

const Curso = () => {
    return(

    <div>
        <div style={StyleSheet.etiqueta}>
            <h3> 1°3 - Turno Mañana</h3>
        </div>
        <div style={StyleSheet.barraEtiqueta}></div>
        <div style={StyleSheet.etiqueta}>
            <h3>Alumnos</h3>
            <h6>Añada, edite y elimine alumnos de este curso</h6>  
        </div>
        <div style={StyleSheet.barraEtiqueta}></div>
    
        <div><h3 style={StyleSheet.titulo}>Asistencia</h3></div>
    
        <div style={StyleSheet.lineas}>
            <h4>Lunes</h4>
        </div>
        <div>
            <h4>Martes</h4>
        </div>
        <div style={StyleSheet.lineas}>
            <h4>Miercoles</h4>
        </div>
        <div>
             <h4>Jueves</h4>
        </div>
        <div style={StyleSheet.lineas}>
            <h4>Viernes</h4>
        </div>

    </div>    
    
    ); 
}

const styles = StyleSheet.create({
    etiqueta:{
        borderRadius: '20px',
        with: '374px',
        heigth: '56px',
        backgroundColor: '#f6edfa',
        color: '#000000',
    },
    barraEtiqueta:{
        borderRadius: '20px',
        with: '56px',
        heigth: '56px',
        backgroundColor: '#833dbe',
    }, //tiene que quedar por detras un pedazito
    titulo:{
        color: '#833dbe',
        textAlign: center,
    },
    lineas:{
        border:  '2px'
        //hay que ver como hacer para poner color al borde de arriba y abajo nada mas
    },
});


export default Curso;

