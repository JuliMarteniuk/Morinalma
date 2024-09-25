import React, { useState } from "react";
import {StyleSheet} from 'react-native';

const HomeProfesor = () => {
    return(

    <div>
        <div style={StyleSheet.materia}>
            <h3> 5°1 - Programacion Web</h3>
            <h6> Ver información del curso</h6>
        </div>
        <div style={StyleSheet.materia}>
            <h3> 5°2 - Programacion Web</h3>
            <h6> Ver información del curso</h6>
        </div>
        <div style={StyleSheet.materia}>
            <h3> 5°3 - Programacion Web</h3>
            <h6> Ver información del curso</h6>
        </div>
        <div style={StyleSheet.materia}>
            <h3> 5°4 - Programacion Web</h3>
            <h6> Ver información del curso</h6>
        </div>
        

    </div>    
    
    );  
}

const styles = StyleSheet.create({
    materia:{
        borderRadius: '20px',
        with: '374px',
        heigth: '96px',
        backgroundColor: '#f6edfa',
        color: '#000000',
        border: '2px solid #833D8E',
    },
});


export default HomeProfesor;
