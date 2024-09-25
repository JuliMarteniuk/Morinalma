import React from "react";
import {StyleSheet, Text} from 'react-native';

const Curso = () => {
    return(

        <div style={styles.container}>
            <div style={styles.etiqueta}>
                <h3> 1°3 - Turno Mañana</h3>
            </div>
            <div style={styles.barraEtiqueta}></div>
            <div style={styles.etiqueta}>
                <h3>Alumnos</h3>
                <Text>Añada, edite y elimine alumnos de este curso</Text>  
            </div>
            <div style={styles.barraEtiqueta}></div>
        
            <div><h3 style={styles.titulo}>Asistencia</h3></div>
        
            <div style={styles.lineas}>
                <h4>Lunes</h4>
            </div>
            <div>
                <h4>Martes</h4>
            </div>
            <div style={styles.lineas}>
                <h4>Miercoles</h4>
            </div>
            <div>
                <h4>Jueves</h4>
            </div>
            <div style={styles.lineas}>
                <h4>Viernes</h4>
            </div>
        </div>    
    
    );  
}


const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        verticalAlign: 'middle',
    },
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
        textAlign: 'center',
    },
    lineas:{
        border:  '2px'
        //hay que ver como hacer para poner color al borde de arriba y abajo nada mas
    },
});

export default Curso;





