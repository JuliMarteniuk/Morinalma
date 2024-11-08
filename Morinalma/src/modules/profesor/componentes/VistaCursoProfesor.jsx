import React, { useState } from "react";
import {StyleSheet} from 'react-native';
//import { ButtonAdd } from '../../../../assets/icons/plus-circle';
const VistaCursoProfesor = () => {
    return(
        <div>
            <div style={styles.materia}>
            <h3> Curso - Materia</h3>
            </div>
            
            <div><h3 style={styles.titulo}>Clases</h3></div>
            <div style={styles.lineas}>
                <h4>* Clase día</h4>
            </div>
            <div>
                <h4>* Clase día</h4>
            </div>
            <div style={styles.lineas}>
                <h4>* Clase día</h4>
            </div>
            <button></button>

            <div><h3 style={styles.titulo}>Evaluaciones</h3></div>
            <div style={styles.lineas}>
                <h4>* Evaluación día</h4>
            </div>
            <div>
                <h4>* Evaluación día</h4>
            </div>
            <div style={styles.lineas}>
                <h4>* Evaluación día</h4>
            </div>
            <button></button>
        </div>
    );  
}

const styles = StyleSheet.create({
    materia:{
        borderRadius: '20px',
        with: '374px',
        heigth: '56px',
        backgroundColor: '#f6edfa',
        color: '#000000',
        border: '2px solid #833D8E',
    },
    
});


export default VistaCursoProfesor;
