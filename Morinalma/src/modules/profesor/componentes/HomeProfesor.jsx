import React from "react";
import { View, StyleSheet } from 'react-native';
import MateriaCard from './MateriaCard';

const HomeProfesor = () => {
    const materias = [
        { grado: "5°1", materia: "Programacion Web" },
        { grado: "5°2", materia: "Programacion Web" },
        { grado: "5°3", materia: "Programacion Web" },
        { grado: "5°4", materia: "Programacion Web" },
    ];

    return (
        <View style={Styles.HomeProfesor}>
            <View style={Styles.formulario}>
                <View style={Styles.casilleros}>
                    {materias.map((materia, index) => (
                        <MateriaCard 
                            key={index}
                            grado={materia.grado}
                            materia={materia.materia}
                        />
                    ))}
                </View>
            </View>    
        </View>
    );  
}

const Styles = StyleSheet.create({
    materia:{
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
        marginTop: '40px',
    },

});


export default HomeProfesor;
