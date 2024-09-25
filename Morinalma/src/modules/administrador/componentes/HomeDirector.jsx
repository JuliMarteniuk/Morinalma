import React, { useState } from "react";
import {StyleSheet} from 'react-native';

const HomeDirector = () => {
    return(

    <div>
        <div style={Styles.rol}s>
            <h3> Preceptores</h3>
            <h6> Añada, edite y elimine preceptores.</h6>

        </div>
        <div style={Styles.rol}>
            <h3> Profesores</h3>
            <h6> Añada, edite y elimine profesores.</h6>
        </div>
        <div style={Styles.rol}>
            <h3> Alumos</h3>
            <h6> Añada, edite y elimine alumnos.</h6>
        </div>
        <div style={Styles.rol}>
            <h3> Cursos</h3>
            <h6> Añada, edite y elimine cursos.</h6>

        </div>
    </div>    
    
    );  
}

const Styles = StyleSheet.create({
    rol:{
        borderRadius: '20px',
        with: '374px',
        heigth: '96px',
        backgroundColor: '#f6edfa',
        color: '#000000',
        border: '2px solid #833D8E',
    },
    //barra:{
        //borderRadius: '20px',
        //with: '96px',
        //heigth: '15px',
        //backgroundColor: '#833dbe',
    //}, //tiene que quedar por detras un pedazito
});


export default HomeDirector;
